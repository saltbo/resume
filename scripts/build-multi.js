const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');

function runCmd(cmd) {
  try {
    console.log(`Running: ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running command: ${cmd}`);
    console.error(error.message);
    process.exit(1);
  }
}

function buildProfile(jsonPath, outputName, themeName) {
  const htmlFile = `dist/${outputName}.html`;
  const pdfFile = `dist/${outputName}.pdf`;

  console.log(`\n--- Building: ${outputName} (Theme: ${themeName}) ---`);
  
  // Ensure 'dist/' directory exists
  const distDir = path.resolve(rootDir, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  // Resolve local resumed binary path to prevent npx global theme loading issues
  const localResumed = path.resolve(rootDir, 'node_modules', '.bin', 'resumed');
  const resumedCmd = fs.existsSync(localResumed) ? `"${localResumed}"` : 'pnpm exec resumed';
  
  const outputHtmlPath = path.resolve(rootDir, htmlFile);
  const scriptPdfPath = path.resolve(rootDir, 'scripts', 'pdf.js');

  // Resolve local theme path to an absolute file:// URL of the entry file for ESM compatibility in resumed
  let resolvedTheme = themeName;
  if (themeName.startsWith('.') || themeName.startsWith('/') || fs.existsSync(path.resolve(rootDir, themeName))) {
    const absPath = path.resolve(rootDir, themeName);
    const isDir = fs.existsSync(absPath) && fs.statSync(absPath).isDirectory();
    const entryPath = isDir ? path.resolve(absPath, 'index.js') : absPath;
    resolvedTheme = `file://${entryPath}`;
  }

  // 1. Render JSON to HTML
  runCmd(`${resumedCmd} render "${jsonPath}" --theme "${resolvedTheme}" --output "${outputHtmlPath}"`);
  
  // 2. Generate PDF using puppeteer script
  runCmd(`node "${scriptPdfPath}" "${htmlFile}" "${pdfFile}"`);
}

function handleConfigMode(config) {
  const masterPath = path.resolve(rootDir, config.master || 'resume.json');
  if (!fs.existsSync(masterPath)) {
    console.error(`❌ Error: Master resume file not found at ${masterPath}`);
    process.exit(1);
  }

  const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
  const themeName = config.theme || './theme';

  for (const [profileName, profileOpts] of Object.entries(config.profiles)) {
    const outputName = profileOpts.output || `resume-${profileName}`;
    
    // Deep clone master data
    const resume = JSON.parse(JSON.stringify(masterData));

    // Apply basics overrides
    if (profileOpts.basics) {
      resume.basics = {
        ...resume.basics,
        ...profileOpts.basics
      };
    }

    // Apply tags filtering if profile has tags specified
    if (profileOpts.tags && Array.isArray(profileOpts.tags)) {
      const targetTags = profileOpts.tags.map(t => t.toLowerCase());

      const filterByTags = (item) => {
        // Read tags ONLY from explicit 'tags' or 'meta.tags' (ignore standard 'keywords' which is used for displaying details)
        const itemTags = (
          item.tags || 
          (item.meta && item.meta.tags) || 
          []
        ).map(t => (typeof t === 'string' ? t.toLowerCase() : (t.name || '').toLowerCase()));

        // If item doesn't specify any tags, we keep it as core shared content
        if (itemTags.length === 0) return true;

        // Keep item if there is any intersection between targetTags and itemTags
        return itemTags.some(tag => targetTags.includes(tag));
      };

      // Filter array fields in JSON Resume schema
      const arrayFields = [
        'work', 'volunteer', 'education', 'awards', 'certificates', 
        'publications', 'skills', 'languages', 'interests', 'references', 'projects'
      ];
      for (const field of arrayFields) {
        if (Array.isArray(resume[field])) {
          resume[field] = resume[field].filter(filterByTags);
          if (field === 'projects') {
            resume[field] = resume[field].slice(0, 2);
          }
        }
      }
    }

    // Write temporary JSON file
    const tempJsonPath = path.resolve(rootDir, `.temp-${profileName}.json`);
    fs.writeFileSync(tempJsonPath, JSON.stringify(resume, null, 2), 'utf8');

    // Build this profile with our local custom theme
    buildProfile(tempJsonPath, outputName, themeName);

    // Clean up temporary JSON file
    try {
      fs.unlinkSync(tempJsonPath);
    } catch (e) {
      // Ignore cleanup error
    }
  }
}

function main() {
  const configPath = path.resolve(rootDir, 'profiles.config.js');
  
  if (!fs.existsSync(configPath)) {
    console.error('❌ Error: profiles.config.js is missing!');
    process.exit(1);
  }

  console.log('Loading profiles.config.js...');
  const config = require(configPath);
  handleConfigMode(config);
  
  console.log('\n✨ All profiles compiled successfully into dist/!');
}

main();

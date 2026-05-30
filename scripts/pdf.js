const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const launchOptions = { headless: true };
    const localChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    if (fs.existsSync(localChromePath)) {
      launchOptions.executablePath = localChromePath;
    }

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    
    // Support command line arguments for custom input/output
    const rootDir = path.resolve(__dirname, '..');
    const inputArg = process.argv[2];
    const outputArg = process.argv[3];
    const filePath = inputArg ? path.resolve(rootDir, inputArg) : path.resolve(rootDir, 'resume.html');
    const outputPath = outputArg ? path.resolve(rootDir, outputArg) : path.resolve(rootDir, 'resume.pdf');

    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '0px',
        right: '20px',
        bottom: '0px',
        left: '20px'
      }
    });
    await browser.close();
    console.log(`PDF generated successfully: ${path.basename(outputPath)} 🚀`);
  } catch (err) {
    console.error('Failed to generate PDF:', err);
    process.exit(1);
  }
})();

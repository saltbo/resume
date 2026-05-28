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
    const filePath = path.resolve(__dirname, 'resume.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.resolve(__dirname, 'resume.pdf'),
      format: 'A4',
      margin: {
        top: '0px',
        right: '20px',
        bottom: '0px',
        left: '20px'
      }
    });
    await browser.close();
    console.log('PDF generated successfully! 🚀');
  } catch (err) {
    console.error('Failed to generate PDF:', err);
    process.exit(1);
  }
})();

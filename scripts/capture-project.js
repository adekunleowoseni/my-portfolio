const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Generate filename from URL
 * @param {string} url - Website URL
 * @returns {string} - Generated filename
 */
function generateFilenameFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname
      .replace('www.', '')
      .replace(/\./g, '-')
      .toLowerCase();
    return `${hostname}.png`;
  } catch (error) {
    // Fallback to a safe filename
    const safeUrl = url.replace(/https?:\/\//, '').replace(/[^a-z0-9]/gi, '-').toLowerCase();
    return `${safeUrl}.png`;
  }
}

/**
 * Capture screenshot from a URL
 */
async function captureScreenshot(url, filename, name) {
  console.log(`Capturing screenshot of ${name || url}...`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport size for a good screenshot
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2
    });
    
    // Navigate to the website
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait a bit for any animations or dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Capture full page screenshot
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const filePath = path.join(publicDir, filename);
    
    await page.screenshot({
      path: filePath,
      fullPage: true,
      type: 'png'
    });
    
    console.log(`✓ Screenshot saved: ${filename}`);
    console.log(`  Path: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error capturing screenshot:`, error.message);
    return false;
  } finally {
    await browser.close();
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node capture-project.js <url> [filename] [name]');
  console.log('');
  console.log('Examples:');
  console.log('  node capture-project.js https://example.com');
  console.log('  node capture-project.js https://example.com example.png');
  console.log('  node capture-project.js https://example.com example.png "Example Project"');
  process.exit(1);
}

const url = args[0];
const filename = args[1] || generateFilenameFromUrl(url);
const name = args[2] || new URL(url).hostname;

captureScreenshot(url, filename, name)
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });


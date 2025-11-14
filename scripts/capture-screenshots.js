const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Capture screenshot from a URL
 * @param {string} url - Website URL
 * @param {string} filename - Output filename (without path)
 * @param {string} name - Project name for logging
 * @returns {Promise<boolean>} - Success status
 */
async function captureScreenshot(url, filename, name) {
  console.log(`Capturing screenshot of ${name}...`);
  
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
    const filePath = path.join(publicDir, filename);
    
    await page.screenshot({
      path: filePath,
      fullPage: true,
      type: 'png'
    });
    
    console.log(`✓ Screenshot saved: ${filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Error capturing ${name}:`, error.message);
    return false;
  } finally {
    await browser.close();
  }
}

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
 * Extract projects from the TypeScript file
 * @returns {Array} - Array of project objects
 */
function extractProjectsFromFile() {
  const projectsFile = path.join(__dirname, '..', 'src', 'app', 'projects', 'page.tsx');
  const content = fs.readFileSync(projectsFile, 'utf-8');
  
  const projects = [];
  const projectRegex = /{\s*title:\s*"([^"]+)",[\s\S]*?link:\s*"([^"]+)",[\s\S]*?imageUrl:\s*"([^"]+)",/g;
  
  let match;
  while ((match = projectRegex.exec(content)) !== null) {
    const title = match[1];
    const link = match[2];
    const imageUrl = match[3];
    
    // Extract filename from imageUrl (remove leading slash)
    const filename = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl;
    
    projects.push({
      title,
      link,
      imageUrl: imageUrl,
      filename
    });
  }
  
  return projects;
}

/**
 * Check if image file exists
 * @param {string} filename - Image filename
 * @returns {boolean} - Whether file exists
 */
function imageExists(filename) {
  const publicDir = path.join(__dirname, '..', 'public');
  const filePath = path.join(publicDir, filename);
  return fs.existsSync(filePath);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // If URL is provided as argument, capture single screenshot
  if (args.length > 0) {
    const url = args[0];
    const filename = args[1] || generateFilenameFromUrl(url);
    const name = args[2] || new URL(url).hostname;
    
    console.log('Capturing single screenshot...\n');
    await captureScreenshot(url, filename, name);
    return;
  }
  
  // Otherwise, scan projects and capture missing screenshots
  console.log('Scanning projects for missing screenshots...\n');
  
  try {
    const projects = extractProjectsFromFile();
    const missingProjects = projects.filter(project => {
      // Only check projects with valid URLs (not /contact, etc.)
      if (!project.link.startsWith('http')) {
        return false;
      }
      return !imageExists(project.filename);
    });
    
    if (missingProjects.length === 0) {
      console.log('✓ All project screenshots are up to date!');
      return;
    }
    
    console.log(`Found ${missingProjects.length} project(s) with missing screenshots:\n`);
    missingProjects.forEach(p => {
      console.log(`  - ${p.title} (${p.filename})`);
    });
    console.log('');
    
    // Capture screenshots for missing projects
    for (const project of missingProjects) {
      await captureScreenshot(project.link, project.filename, project.title);
      console.log(''); // Empty line for readability
    }
    
    console.log('All missing screenshots captured!');
  } catch (error) {
    console.error('Error processing projects:', error.message);
    console.log('\nUsage:');
    console.log('  npm run capture-screenshots                    # Capture missing screenshots');
    console.log('  npm run capture-screenshots <url> [filename]   # Capture specific URL');
  }
}

main().catch(console.error);

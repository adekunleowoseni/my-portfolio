# Screenshot Capture Scripts

These scripts automatically capture screenshots of your portfolio projects from their live URLs.

## Usage

### Auto-capture missing screenshots

After adding a new project to `src/app/projects/page.tsx`, run:

```bash
npm run capture-screenshots
```

This will:
- Scan all projects in your projects file
- Check which screenshots are missing
- Automatically capture screenshots for projects with missing images
- Save them to the `public` folder

### Capture a single project

To capture a screenshot for a specific URL:

```bash
npm run capture-project <url> [filename] [name]
```

**Examples:**
```bash
# Auto-generate filename from URL
npm run capture-project https://example.com

# Specify custom filename
npm run capture-project https://example.com my-project.png

# With custom name for logging
npm run capture-project https://example.com my-project.png "My Project"
```

## Workflow

When adding a new project:

1. Add the project to `src/app/projects/page.tsx` with:
   - `link`: The live URL of the project
   - `imageUrl`: The path where the screenshot will be saved (e.g., `/my-project.png`)

2. Run the capture script:
   ```bash
   npm run capture-screenshots
   ```

3. The screenshot will be automatically captured and saved!

## Notes

- Screenshots are captured at 1920x1080 resolution with 2x device scale factor
- Full-page screenshots are captured (entire page, not just viewport)
- The script waits for page load and animations before capturing
- Screenshots are saved as PNG files in the `public` folder


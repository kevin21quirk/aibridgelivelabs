const sharp = require('sharp');
const path = require('path');

async function createFirstnameLogo() {
  try {
    const outputPath = path.join(__dirname, 'public', 'firstnamelogo.png');
    
    // Create a simple text-based logo
    const svg = `
      <svg width="280" height="80" xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="80" fill="#1e2235"/>
        <text x="140" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="600" text-anchor="middle" fill="#ffffff">
          Firstname Communications
        </text>
      </svg>
    `;
    
    await sharp(Buffer.from(svg))
      .png()
      .toFile(outputPath);
    
    console.log('Firstname Communications logo created successfully!');
    console.log(`Output: ${outputPath}`);
  } catch (error) {
    console.error('Error creating logo:', error);
  }
}

createFirstnameLogo();

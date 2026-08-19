const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { name: 'welcome.jpg', url: 'https://images.unsplash.com/photo-1574168094498-e4e82e3d0e79?w=800&q=80' },
  { name: 'celebrate.jpg', url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80' },
  { name: 'create.jpg', url: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=800&q=80' },
  { name: 'stay.jpg', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
  { name: 'nature.jpg', url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&q=80' }
];

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

async function download() {
  for (const img of images) {
    const dest = path.join(imgDir, img.name);
    console.log(`Downloading ${img.name}...`);
    
    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(dest);
      https.get(img.url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          https.get(response.headers.location, (res2) => {
            res2.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
          });
        } else {
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }
      }).on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    });
  }
  console.log('All images downloaded.');
}

download();

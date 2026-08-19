const fs = require('fs');
const https = require('https');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

const dest = path.join(imgDir, 'curtain.jpg');
const url = 'https://images.unsplash.com/photo-1514302636257-2e1d701dfd22?w=1600&q=80'; // classic red curtain stage

console.log('Downloading curtain...');
const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
    https.get(response.headers.location, (res2) => {
      res2.pipe(file);
      file.on('finish', () => { file.close(); console.log('Done!'); });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => { file.close(); console.log('Done!'); });
  }
}).on('error', (err) => {
  console.error(err);
});

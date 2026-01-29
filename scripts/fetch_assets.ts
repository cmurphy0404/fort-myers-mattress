/**
 * Fetch Assets Script
 * Downloads licensed images from Unsplash for the website.
 *
 * Run with: npm run fetch-assets
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Unsplash images with direct download URLs
// All images are from Unsplash and licensed for free use
// https://unsplash.com/license
const images = [
  {
    filename: 'hero-bedroom.jpg',
    // Modern bedroom with neutral tones
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
    credit: 'Photo by Spacejoy on Unsplash',
    source: 'https://unsplash.com/photos/RqO6kwm4tZY',
  },
  {
    filename: 'mattress-display.jpg',
    // Clean white bedroom/mattress
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
    credit: 'Photo by Ty Carlson on Unsplash',
    source: 'https://unsplash.com/photos/wVdVCGiXSco',
  },
  {
    filename: 'showroom.jpg',
    // Furniture showroom / bedroom setup
    url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    credit: 'Photo by Jean-Philippe Delberghe on Unsplash',
    source: 'https://unsplash.com/photos/Ry9WBo3qmoc',
  },
  {
    filename: 'comfortable-bed.jpg',
    // Cozy bedroom with comfortable bed
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80',
    credit: 'Photo by Deconovo on Unsplash',
    source: 'https://unsplash.com/photos/HlzR7Oe7L6g',
  },
  {
    filename: 'bedroom-interior.jpg',
    // Modern bedroom interior
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
    credit: 'Photo by Chastity Cortijo on Unsplash',
    source: 'https://unsplash.com/photos/R-w5Q-4Mqm0',
  },
];

function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    const request = (url: string) => {
      https.get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            request(redirectUrl);
            return;
          }
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete partial file
        reject(err);
      });
    };

    request(url);
  });
}

async function main() {
  console.log('📸 Fetching images from Unsplash...\n');

  // Ensure images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  for (const image of images) {
    const filepath = path.join(IMAGES_DIR, image.filename);

    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`✓ ${image.filename} (already exists)`);
      continue;
    }

    try {
      console.log(`↓ Downloading ${image.filename}...`);
      await downloadImage(image.url, filepath);
      console.log(`✓ ${image.filename}`);
    } catch (error) {
      console.error(`✗ Failed to download ${image.filename}:`, error);
    }
  }

  console.log('\n✅ Done! Images saved to public/images/');
  console.log('\nImage credits:');
  images.forEach((img) => {
    console.log(`  - ${img.filename}: ${img.credit}`);
  });
}

main().catch(console.error);

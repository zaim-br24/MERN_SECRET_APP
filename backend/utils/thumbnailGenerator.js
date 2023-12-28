import ffmpeg from 'fluent-ffmpeg';
import { createCanvas } from 'canvas';
import fs from 'fs';

export async function captureScreenshot(inputVideoPath, outputImagePath, timestamp) {
  return new Promise((resolve, reject) => {
    const canvas = createCanvas(1280, 720); // Specify the canvas dimensions
    const ctx = canvas.getContext('2d');

    ffmpeg(inputVideoPath)
      .seekInput(timestamp)
      .frames(1)
      .on('end', async () => {
        const out = fs.createWriteStream(outputImagePath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => {
          console.log(out)
          resolve(outputImagePath);
        });
      })
      .on('error', (err) => {
        reject(err);
      })
      .screenshot({
        timestamps: ['50%'],
        filename: 'thumbnail.png',
        folder: outputImagePath, // Set your desired folder (current directory)
      })
  });
}

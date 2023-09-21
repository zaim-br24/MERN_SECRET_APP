import dotenv from 'dotenv'
dotenv.config()
import crypto from 'crypto'
import cloudinary from 'cloudinary';

// Configure Cloudinary 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_SECRET,
  
});



const cloudUploadVideo = async (file) =>{
  const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

    try {
        const result = await cloudinary.v2.uploader.upload(file, {
          resource_type: 'video', // Specify the resource type
          public_id: generateFileName(), // Set a unique public ID for the video
          chunk_size: 6000000, // Set a chunk size for large videos
        });
        const {url,secure_url, playback_url, duration, public_id} = result
         return {url ,secure_url, playback_url, duration, public_id}
      } catch (error) {
        console.error('Error uploading video:', error);
      }
}

const cloudUploadImage = async (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, (err, result) => {
      if (err) {
        console.error('Error uploading image:', err);
        reject(err); // Reject the promise with an error
      } else {
        const { secure_url, public_id } = result;
        resolve({ secure_url, public_id }); // Resolve the promise with the result
      }
    });
  });
};

const cloudUpdateImage = (filePath, publicId) =>{
  cloudinary.uploader.upload(filePath, { public_id: publicId }, (error, result) => {
    if (error) {
      console.error('Error uploading new image:', error);
    } else {
      console.log('New image uploaded to Cloudinary:', result.url);
    }
  });
}

const cloudDestroyFile = (publicId)=>{
  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      console.error('Error deleting old File:', error);
    } else {
      console.log('Old File deleted from Cloudinary');
    }
  });
  
}

export {
    cloudUploadVideo,
    cloudUploadImage,
    cloudUpdateImage,
    cloudDestroyFile
}
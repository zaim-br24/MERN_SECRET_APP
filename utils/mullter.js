
import multer from "multer";

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up multer storage and upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Use different directories for video and thumbnail uploads
      if (file.fieldname === 'video') {
        cb(null, join(__dirname, 'uploads/videos'));
      } else if (file.fieldname === 'thumbnail') {
        cb(null, join(__dirname, 'uploads/thumbnails'));
      } else if(file.fieldname === 'avatar'){
        cb(null, join(__dirname, 'uploads/avatar'));
      }else {
        // Handle other cases or errors here
        cb(new Error('Invalid field name'));
      }
    },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    
  const upload = multer({storage: storage});

  export default upload
import Videos from '../Models/Watch.js'
import Users from '../Models/User.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequistError, NotFoundError} from '../Errors/index.js'
import notFoundMiddleware from '../middleware/not-found.js'
import {createReadStream} from 'fs';
import { fileURLToPath } from 'url';
import {dirname, join } from 'path';
import crypto from "crypto"
// import { uploadFile, deleteFile, getObjectSignedUrl } from '../utils/S3.js'
import {unlinkFiles} from '../utils/unlinkFiles.js'
import { cloudUploadVideo, cloudUploadImage} from '../utils/cloudinaryUpload.js'

// const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')


//Get the current module's filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const addVideo = async (req, res) =>{
    const {title, description, categories, tags}= req.body

    const videoFile = req.files['video'][0]; // Access the video file
    const thumbnailFile = req.files['thumbnail'][0]; // Access the thumbnail file

    try{
        if(!title || !description  || !categories || !tags){
            throw new BadRequistError('Please Provide All Values.')
        }

        if (!req.headers['content-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
            throw new BadRequistError('Invalid content type. Use multipart/form-data.');
          }

        if (!videoFile) {
            throw new BadRequistError('No video file provided.');
        }
        // const fileWriteStream = createWriteStream(join(__dirname, "../uploads/chunks", videoFile.originalname));

        const videoFilePath = join(__dirname, "../uploads/videos", videoFile.originalname);
        const thumbnailFilePath = join(__dirname, "../uploads/thumbnails", thumbnailFile.originalname);
        
        const videoReadStream = createReadStream(videoFilePath);
        const thumbnailReadStream = createReadStream(thumbnailFilePath);
        
        let videoBuffer = Buffer.from([]);
        let thumbnailBuffer = Buffer.from([]);
        
        videoReadStream.on('data', (chunk) => {
          videoBuffer = Buffer.concat([videoBuffer, chunk]);
          console.log("Reading video... Current buffer length:", videoBuffer.length);
        });
        
        thumbnailReadStream.on('data', (chunk) => {
          thumbnailBuffer = Buffer.concat([thumbnailBuffer, chunk]);
          console.log("Reading thumbnail... Current buffer length:", thumbnailBuffer.length);
        });
        

        // // Listen for the 'end' event to indicate the file has been fully read
        videoReadStream.on('end', async() => {
        try {
                // generate random name
                // console.log("generating name...")
                // const videoName = generateFileName()
                // const thumbnailName = generateFileName()

                // upload to cloudinary 
                console.log("uploading video to cloudinary...")
                const {url,secure_url, playback_url, duration, public_id} =   await cloudUploadVideo(videoFile.path)
                console.log({url, secure_url, playback_url, duration,public_id})

                console.log("uploading thumbnail to cloudinary...")
                const {secure_url: thumbnailUrl} =  await cloudUploadImage(thumbnailFile.path)

                // upload to AWS 
                // console.log("uploading video to AWS...")
                // await uploadFile(videoBuffer, videoName, videoFile.mimetype)
                // console.log("uploading thumbnail to AWS...")
                // await uploadFile(thumbnailBuffer, thumbnailName, thumbnailFile.mimetype, true)

                unlinkFiles([videoFilePath, thumbnailFilePath])
                .then((deletedFiles) => {
                  console.log('Deleted files:', deletedFiles);
                })
                .catch((err) => {
                  console.error('Error deleting files:', err);
                });
                // get a url from aws baszd on the videoName and store it in th database
                // const videoUrl =  await getObjectSignedUrl(videoName)
                // const thumbnailUrl =  await getObjectSignedUrl(thumbnailName, true)
                // console.log(`${videoUrl}`)
                // console.log(`${thumbnailUrl}`)
                console.log("uploading to mongoDB...")
                const newVideo =  await Videos.create({
                    name: public_id,
                    title,
                    description,
                    categories, 
                    tags,
                    video:{
                        videoSize: videoFile.size,
                        videoUrl: [url,secure_url, playback_url], 
                        duration,
                        thumbnailUrl: thumbnailUrl
                    },
                    
                    createdBy: req.user.userId,
                })
            
                 newVideo.save()

                 res.status(StatusCodes.OK).json({ msg: 'Video uploaded successfully' });

        } catch (error) {
            console.log('Error:', error);
            res.status(StatusCodes.BAD_REQUEST).json({ msg: 'An Error occure while uploading, please try again' })
        }
        });
       

        // Listen for any errors that may occur during file reading
        videoReadStream.on('error', (err) => {
            console.error('Error reading file:', err);
        }); 
        thumbnailReadStream.on('error', (err) => {
            console.error('Error reading file:', err);
        }); 
    
    }catch (error) {
         console.log('Error:', error);
         res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal server error' })
        }
}


const getAllVideos = async (req, res)=>{       
        // setup pagination
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10
        const skip = (page - 1) * limit //10
        const totalVideos=  await Videos.countDocuments({});
        let videosData = [];
        const data = await Videos.find({})
        .skip(skip)
        .limit(limit)
        .exec(); // Execute the query

        for (const video of data) {
            const user = await Users.findById(video.createdBy);
            const videoObject = video.toObject(); // Convert to plain JavaScript object
            videoObject.postedBy = user.name;
            videoObject.avatar = user.avatar;
            videosData.push(videoObject)
          }

        const numOfVideosPages = Math.ceil(totalVideos / limit)
        res.status(StatusCodes.OK).json({videosData, totalVideos, numOfVideosPages})
}

const getOneVideo = async (req, res) => {
    try {
      const video = await Videos.findOne({ name: req.params.videoId });
  
      if (!video) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ msg: "Video you're looking for not found!" });
      }
  
      res.status(StatusCodes.OK).json(video);
    } catch (error) {
      console.error('Error fetching video:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal Server Error' });
    }
  };
  
const deleteVideo = async (req, res)=>{

    try {
        const deletedVideo = await Videos.deleteOne({_id: req.params.videoId})

        if (deletedVideo.deletedCount > 0) {
            res.status(StatusCodes.OK).json({ msg: 'Post deleted successfully' });
        }else{
            throw new NotFoundError('Post Not Found')
        }
        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal server error' });
    }
}
const updateVideo = async (req, res)=>{
    const {title, description, path, categories, hashtags} = req.body
    
    if(!title || !description || !path || !categories || !hashtags){
        throw new BadRequistError('Please Provide All Values.')
    }

    const video = await Videos.findOne({ _id: req.params.videoId})

    video.title = req.body.title
    video.description = req.body.description
    video.path = req.body.path
    video.categories = req.body.categories,
    video.hashtages = req.body.hashtags

    await video.save()


    
    res.status(StatusCodes.OK).json(video)

}


// when using multer we are passing the video to the folder destination that we created with milter so when we need to read the file as chunks we read it from that folder (uploads/videos)
// reading and writting streams 

export {
    addVideo,
    deleteVideo,
    updateVideo,
    getAllVideos,
    getOneVideo,
    
}


// (((((( instead of using pipe)))))) pipe store chunk by chunks the same as the code below and its preferable but if you want to store each buffer with it's length and id we can use this approach below

// // Initialize an empty buffer to accumulate chunks
// let buffer = Buffer.from([]);

// // Listen for the 'data' event to read chunks of data
// fileStream.on('data', (chunk) => {
//     // Append the chunk to the buffer
//     buffer = Buffer.concat([buffer, chunk]);
//     console.log(buffer)
//     fileWriteStream.write(chunk); // this how to fileWriteStream video by chunks to a file
//     // Process the chunk as needed (e.g., log its size)
//     console.log('Received chunk of size:', chunk.length);
// });

// fileWriteStream.end();

// // Listen for the 'end' event to indicate the file has been fully read
// fileStream.on('end', () => {
//     // The 'buffer' now contains the entire file contents
//     console.log('File reading complete.');
//     console.log('Total file size:', buffer.length);
//     // console.log(buffer)

//     // You can process the 'buffer' further or perform any other actions here (like storing it to database)
// });

// fileWriteStream.on('finish', () => {
//     console.log('Write stream finished writing to the file.');
// });

// // Listen for any errors that may occur during writing
// fileWriteStream.on('error', (err) => {
//     console.error('Error writing to the file:', err);
// });
// // Listen for any errors that may occur during file reading
// fileStream.on('error', (err) => {
//     console.error('Error reading file:', err);
// });

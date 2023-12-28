import Users from '../Models/User.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequistError, UnauthenticatedError} from '../Errors/index.js'
import {createReadStream} from 'fs';
import { unlinkFiles } from '../utils/unlinkFiles.js';
import { fileURLToPath } from 'url';
import {dirname, join } from 'path';
import {cloudUploadImage,cloudDestroyFile } from '../utils/cloudinaryUpload.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const register = async (req , res, next)=> {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        throw new BadRequistError("Please provide all values.")
    }
    //check if user exist
    const userAlreadyExist = await Users.findOne({email});
    if(userAlreadyExist) {
        const firstLetter = email[0];
        const restOfEmail = email.slice(email.length - 10)
        throw new BadRequistError(`${firstLetter +'*****'+ restOfEmail} email already in use.`)
    }
    //create a user
    const  user =  await Users.create({
        name,
        email,
        password
    })
    //calling the createJWT coming from User schema to create a token (unique key)
   const token =  user.createJWT()
   //returning the user object without the PASSWORD
    res.status(StatusCodes.CREATED).json({user:{
        name:user.name,
        email:user.email,
        lastName:user.lastName,
        location: user.location

    }, token, location:user.location,})               
    
    
}
const login = async (req , res)=> {
    const {email, password} = req.body;
    console.log(email, password)
    if(!email || !password){
        throw new BadRequistError("Please provide all values.")
    }
   
    const user = await Users.findOne({email}).select('+password')

    if(!user){
        return new UnauthenticatedError('invalid values!')
    } 

    const isPasswordCorrect = await user.comparePassword(password)

    if(!isPasswordCorrect){
        return new UnauthenticatedError('invalid credentials!')

    }
    
    //calling the createJWT coming from User schema to create a token (unique key)
   const token =  user.createJWT()

    res.status(StatusCodes.OK).json({user, token, location:user.location,})               
    
    
}


const updateUser = async (req , res)=> { 
    const {name, email, lastName, skills} = req.body;
    const avatarFile = req.files['avatar'][0]; // Access the video file
    
    const avatarFilePath = join(__dirname, "../uploads/avatar", avatarFile.originalname);
    const avatarReadStream = createReadStream(avatarFilePath);

    if(!name || !email || !lastName){
        throw new BadRequistError('Please Provide All Values!')
    }
    
    const user = await Users.findOne({_id: req.user.userId})
    
    if (!avatarFile) {
        throw new BadRequistError('No video file provided.');
    }
    let avatarBuffer = Buffer.from([]);

        avatarReadStream.on('data', (chunk) => {
            avatarBuffer = Buffer.concat([avatarBuffer, chunk]);
            console.log("Reading avatar... Current buffer length:", avatarBuffer.length);
        });

        avatarReadStream.on('end', async() => {
        try {
            if(user.public_id){
                await cloudDestroyFile(user.public_id)
            }
            console.log("uploading avatar to cloudinary...")
            const {secure_url, public_id} =  await cloudUploadImage(avatarFile.path)
            console.log(secure_url, public_id)
            user.avatar = secure_url
            user.public_id = public_id
            // UPDATE mongoDB
            await user.save()

            unlinkFiles([avatarFilePath])
            .then((deletedFiles) => {
                      console.log('Deleted files:', deletedFiles);
             })
        } catch (error) {
            console.log('Error:', error);
            res.status(StatusCodes.BAD_REQUEST).json({ msg: 'An Error occure while uploading Avatar, please try again' })
        }
        });

    user.name= name;
    user.email= email;
    user.lastName= lastName;
    user.skills = skills;

   await user.save()
   
   const token = user.createJWT()

    res.status(StatusCodes.OK).json({user, token, location:user.location,})   
}
const getUser = async (req, res)=>{
  
    const user = await Users.findOne({_id: req.user.userId})
    if(!user) return

    res.status(StatusCodes.OK).json(user)  
}
export {
    register,
    login,
    updateUser,
    getUser
}
import Redoos from '../Models/Redoo.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequistError} from '../Errors/index.js'



const getAllRedoos = async (req, res)=>{
    // const queryObject = { }
    let result = Redoos.find({})

    // setup pagination
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 5
    const skip = (page - 1) * limit //10
    result = result.skip(skip).limit(limit)    
    const totalRedoos =  await Redoos.countDocuments({});
    const numOfRedoosPages = Math.ceil(totalRedoos / limit)
    const redoosData = await result

    res.status(StatusCodes.OK).json({redoosData, totalRedoos, numOfRedoosPages})

}

const getOneRedoo = async(req, res)=> {
  res.send("one redoo")
}

const addRedoo = async (req, res)=>{
        const { title, content, categories, tags, image } = req.body

        try {

           const newRedoo =  await Redoos.create({
                title,
                content,
                image:"data:image/png;base64," + image,
                tags,
                categories,
                createdBy: req.user.userId,
                name: req.user.userName
                });

                newRedoo.save()
                res.status(StatusCodes.OK).json({ msg: 'Image uploaded successfully' });
                
            }catch(error){
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error})
            }

        }

const deleteRedoo = async (req, res)=>{
    res.send("edit Redoo")
}
const updateRedoo = async (req, res)=>{
    const {title, content, image, categories} = req.body
    
    if(!title || !content || !image || !categories){
        throw new BadRequistError('Please Provide All Values.')
    }

    const redoo = await Redoos.findOne({ _id: req.params.redooId})

    redoo.title = req.body.title
    redoo.content = req.body.content
    redoo.image = req.body.image
    redoo.categories = req.body.categories

    await redoo.save()

    
    res.status(StatusCodes.OK).json(redoo)


}
export {
    addRedoo,
    deleteRedoo,
    updateRedoo,
    getAllRedoos,
    getOneRedoo,
}




// ---------------- using multer

// Storage configuration for Multer
// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//     //   const timestamp = Date.now();
//       cb(null, file.originalname);
//     },
//   });
// const upload = multer({ storage: storage }).single('image');
// const addRedoo = async (req, res)=>{

//     upload(req, res, async (err)=>{
//         const { title, content, categories, tags } = req.body
//         try {
//             if(!title || !content || !categories || !tags || !req.file){
//                 return res.status(400).json({ msg: 'Please provide all values' });
//             }
//             const newRedoo =  new Redoos({
//                     title,
//                     content,
//                     image: {
//                         data: req.file.filename,
//                         contentType: req.file.mimetype
//                     },
//                     tags,
//                     categories,
//                     createdBy: req.user.userId
//                 });

//                 await newRedoo.save()
//                 res.json({ msg: 'Image uploaded successfully' });
                
//             }catch(error){res.json({msg: error})
//         }
   
//     })

// }
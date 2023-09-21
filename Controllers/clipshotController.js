import Clipshots from '../Models/Clipshot.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequistError, NotFoundError} from '../Errors/index.js'

// GET ALL POST
const getAllClipshots = (req, res)=>{
    res.send("All Clipshots")
}

// GET ONE POST
const getOneClipshot = (req, res)=> {
    res.send('One Clipshot')
}
// CREATE POST
const addClipshot = async (req, res)=>{
    const {title, description, url, categories, hashtags} = req.body

    if(!title || !description || !url || !categories || !hashtags){
        throw new BadRequistError("please Provide All  Values!")
    }
    
    req.body.uploadedBy = req.user.userId

    const Clipshot = await Clipshots.create(req.body)
    res.status(StatusCodes.CREATED).json(Clipshot)
}

// DELETE POST
const deleteClipshot = async (req, res)=>{
    try {
        const deletedClipshot = await Clipshots.deleteOne({_id: req.params.clipshotId})

        if (deletedClipshot.deletedCount > 0) {
            res.status(StatusCodes.OK).json({ msg: 'Post deleted successfully' });
        }else{
            throw new NotFoundError('Post Not Found')
        }
        
    } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }}
// UPDATE POST
const updateClipshot = async (req, res)=>{
    const {title, description, url, categories, hashtags} = req.body
    
    if(!title || !description || !url || !categories || !hashtags){
        throw new BadRequistError('Please Provide All Values.')
    }

    const clipshot = await Clipshots.findOne({ _id: req.params.clipshotId})

    clipshot.title = req.body.title
    clipshot.description = req.body.description
    clipshot.url = req.body.url
    clipshot.categories = req.body.categories,
    clipshot.hashtags = req.body.hashtags

    await clipshot.save()

    res.status(StatusCodes.OK).json(clipshot)

}
export {
    addClipshot,
    deleteClipshot,
    updateClipshot,
    getAllClipshots,
    getOneClipshot
}
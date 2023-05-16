import Posts from '../Models/Post.js'
import { StatusCodes } from 'http-status-codes'
import {BadRequistError, UnauthenticatedError} from '../Errors/index.js'



const addPost = async (req, res)=>{
    const {title, content, image} = req.body

    if(!title || !content || !image){
        throw new BadRequistError("please Provide All  Values!")
    }
    
    const post = await Posts.create({
        title,
        content,
        image
    })

    res.status(StatusCodes.CREATED).json(post)
}

export {
    addPost
}
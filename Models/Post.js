import mongoose from "mongoose";


const PostSchema =  new mongoose.Schema({

    title:{
        type: String,
        required: [true, 'please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    content:{
        type: String,
        require: [true, "please Provide a content"],
        minlength:3,
    },
    image:{
        type: String,
    },
    date:{
        type:String,
        trim:true
    },
    location:{
        type:String,
        trim: true
    }

})


export default mongoose.model('Posts', PostSchema)
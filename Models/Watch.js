import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema ({
    name:{
        type: String,
        index:true, 
        unique:true,
    },
    title:{
        type: String,
        required:[true, "Please provide a title."],
        minlength: [4, "Your title is too short."],
        maxlength: [80, "Please make your title concise."],
        trim: true,
    },
    description:{
        type: String,
        required: [true, "Please provide a description."],
        minlength: [4, "Your description is too short."],
        maxlength: [115, "Please make your description concise."],
        trim: true,
    },
    video:{
        videoUrl:[{type: String,}],
        thumbnailUrl:{
            type: String,
            required: [true, "Please add a thumbnail to your video."]
        },
        videoSize:{
            type:Number
        },
        duration:{type: Number}
    },

    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        // required: [true , "Please provide a user."]
    },
    categories: [{
        type: String,
        required: [true, 'Please choose categories'], 
    }],
    tags:[{
        type: String,
        required: [true, 'Please add at less one tag']
    }],
    comments:{
        type: Number,
        default: Math.floor(Math.random()* 100)

    },
    likes:{
        type: Number,
        default: Math.floor(Math.random()* 100)
    },
    views:{
        type: Number,
        default: Math.floor(Math.random()* 1000)
    },
}, { timestamps: true } );

export default mongoose.model('Video', VideoSchema)
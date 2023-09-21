import mongoose from "mongoose";

const ClipshotSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Please provide a title."],
        minlength: [10, "Your title is too short."],
        maxlength: [50, "Please make your title concise."],
        trim: true,
    },
    description:{
        type: String,
        required: [true, "Please provide a description."],
        minlength: [10, "Your description is too short."],
        maxlength: [80, "Please make your description concise."],
        trim: true,
    },
    url:{
        type: String,
        required: [true, "Please upload a Clipshot."]
    },
    uploadedBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true , "Please provide a user."]
    },
    categories: [{
        type: String,
        required: [true, 'Please choose categories'], 
    }],
    hashtags:[{
        type: String,
        required: [true, 'Please add hashtages']
    }],
    comments:{
        type: Number
    },
    likes:{
        type: Number
    }
}, { timestamps: true } )

export default mongoose.model('Clipshot', ClipshotSchema)
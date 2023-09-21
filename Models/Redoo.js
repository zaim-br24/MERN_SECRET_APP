import mongoose from "mongoose";

const RedooSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: [4, "Your title is too short."],
      maxlength: [80, "Please make your title concise."],
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: [4, "Your content is too short."],
      maxlength: [500, "Please make your content concise."],
      trim: true,
    },
    // image: {
    //     data: Buffer,
    //     contentType: String, 
    //     required: false, 
    // },
    image: {
      type: String,
    },
    name:{
      type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        // ref: 'User',
        // required: [true, 'Please provide user'],
    },
    categories: [{
      type: String,
      // required: [true, 'Please choose categories'], 
    }],

    tags:[{
      type: String,
      // required: [true, 'Please add hashtages']
    }],
    comments:{
      type: Number,
      default: Math.floor(Math.random()* 100)
    },
    likes:{
      type: Number,
      default: Math.floor(Math.random()* 100),
    },

  }, { timestamps: true } );


export default mongoose.model('Redoo', RedooSchema)

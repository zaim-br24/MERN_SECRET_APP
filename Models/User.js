
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please provide a name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email:{
        type: String,
        required: [true, "please provide an email"],
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: 'please provide a valid email'
        },
        trim: true
    },
    password:{
        type: String,
        required: [true, 'please provide a password'],
        minlength:8,
        maxlength:30,
        select: false  // the SELET key === false means can't be accessed if you return it from the DB using 'find' or 'findOne'
    },
    avatar:{type: String},
    public_id :{type: String},
    lastName:{
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
        default: "last name"
    },
    location:{
        type: String,
        trim: true,
        default: "My city"
    },
    followers:{
        type: Number,
        default: Math.floor(Math.random() * 1000),
    },
    following:{
        type: Number,
        default: Math.floor(Math.random() * 1000),
    },
    skills:[{
        type: String
    }],
    tokens: [{type: Object}]
})


// hashing the password
UserSchema.pre("save", async function(){
    const user = this;
    if(!user.isModified("password")) return  // if password !user.isModified("password") === true (DO NOTHING) (if we don't stop, it will hash a new password which is different from what in the DB)

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
})

// this function can access to the THIS object which include the User register information
UserSchema.methods.createJWT = function(){
    const payload = {
        userId: this._id,
        // email: this.email,
    }
   const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
   return token

}

UserSchema.methods.comparePassword = async function(condidatePassword){
    const isMatch = bcrypt.compare(condidatePassword, this.password);
    return isMatch
}

export default mongoose.model('User', UserSchema);
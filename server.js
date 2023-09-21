import dotenv from "dotenv";
dotenv.config()
import express  from 'express'
import 'express-async-errors'
import morgan from "morgan";
import bodyParser from "body-parser";
import multer from "multer"
// import cors from 'cors'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path'
// security
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

const app = express();

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
// DB and authentication
import connectDB from "./db/connect.js";
// Mullter 
// import upload from './utils/mullter.js'
// Middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authRouter from "./Router/authRouter.js";
import redooRouter from './Router/redooRouter.js'
import watchRouter from './Router/watchRouter.js'
import clipshotRouter from './Router/clipshotRouter.js'
import authenticateUser from "./middleware/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// // Set up multer storage and upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      if (file.fieldname === 'video') {
        cb(null, join(__dirname, 'uploads/videos'));
      } else if (file.fieldname === 'thumbnail') {
        cb(null, join(__dirname, 'uploads/thumbnails'));
      } else if(file.fieldname === 'avatar'){
        cb(null, join(__dirname, 'uploads/avatar'));
      }else {
        // Handle other cases or errors here
        cb(new Error('Invalid field name'));
      }
    },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    
  const upload = multer({storage: storage});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(express.json())
app.use(helmet()) //secure headers
app.use(xss()) //Sanitize the inputs (prevent cross-site-scripting)
app.use(mongoSanitize())// prevent mongoDB injections 


//routes
app.use("/api/v1/auth", upload.fields([{ name: 'avatar', maxCount: 1 }]), authRouter );
app.use("/api/v1/redoos",authenticateUser, redooRouter );
app.use("/api/v1/watchs",authenticateUser, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), watchRouter );
app.use("/api/v1/clipshots",authenticateUser, clipshotRouter );


app.use(notFoundMiddleware )
app.use(errorHandlerMiddleware)


app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

// server listening
const port = process.env.PORT || 5000
const start = async ()=>{
    try {
        await connectDB(process.env.DB_URL, process.env.DB_PASSWORD)
        console.log("connected to mongoDB successfully...!")
        app.listen(port, ()=> console.log(`server listening on port ${port}...`))
    } catch (error) {
     console.log(error)   
    }
}

start()


  // "scripts": {
  //   "server": "nodemon server.js npm --ignore client",
  //   "client": "npm start --prefix client",
  //   "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
  // },
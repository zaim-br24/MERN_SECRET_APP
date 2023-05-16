import { addPost } from "../Controllers/createPostController.js";
import  express from "express";
const router = express.Router()

router.route('/create-post').post(addPost);

export default router
import {addVideo,
    deleteVideo,
    updateVideo,
    getAllVideos,
    getOneVideo} from "../Controllers/watchController.js";
import  express from "express";
const router = express.Router()


router.route('/').get(getAllVideos);
router.route('/:videoId').get(getOneVideo).delete(deleteVideo);
router.route('/submit').post(addVideo);
router.route('/update/:videoId').patch(updateVideo);


export default router
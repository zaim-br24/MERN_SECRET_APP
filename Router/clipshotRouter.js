import {addClipshot,
    deleteClipshot,
    updateClipshot,
    getAllClipshots,
    getOneClipshot,} from "../Controllers/clipshotController.js";
import  express from "express";
const router = express.Router()

router.route('/').get(getAllClipshots);
router.route('/:clipshotId').get(getOneClipshot).delete(deleteClipshot);
router.route('/upload/clipshot').post(addClipshot);

router.route('/create/clipshot').post(addClipshot);
router.route('/update/:clipshotId').patch(updateClipshot);


export default router
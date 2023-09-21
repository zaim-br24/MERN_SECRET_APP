import {addRedoo,
    deleteRedoo,
    updateRedoo,
    getAllRedoos,
    getOneRedoo,} from "../Controllers/redooController.js";
import  express from "express";
const router = express.Router()

router.route('/').get(getAllRedoos);
router.route('/:id').get(getOneRedoo);

router.route('/submit').post(addRedoo);
router.route('/upload').post(addRedoo);
router.route('/update/:redooId').patch(updateRedoo).delete(deleteRedoo);



export default router
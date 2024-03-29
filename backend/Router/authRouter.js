import { login, register , updateUser, getUser } from "../Controllers/authController.js";
import  express from "express";
import authenticateUser from "../middleware/auth.js";
const router = express.Router()
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requests from this IP, please try again after 15 minutes',
})
// we can use app.use(limiter) in the server if want to use it globly


router.route('/register').post(limiter, register);
router.route('/login').post(limiter,login);
router.route('/profile').get(authenticateUser,getUser);
// router.route('/logout').post(logout);
router.route('/updateUser').patch(authenticateUser, updateUser);


export default router
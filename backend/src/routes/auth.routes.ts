import express from 'express';
import authCtrl from '../controllers/authController';

const router = express.Router();

router.route('/login').post(authCtrl.login);

export default router;

import express from 'express';
import userCtrl from '../controllers/userController';

const router = express.Router();

router.route('/login').post(userCtrl.login);

export default router;

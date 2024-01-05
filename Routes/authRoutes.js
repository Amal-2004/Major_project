import express from 'express';
import { registerUser, loginUser } from '../Controller/authController.js';
const router = express.Router();

router.use(express.json());

router.post('/signup', (req, res) => registerUser(req, res));
router.post('/login', (req, res) => loginUser(req, res));

export default router;

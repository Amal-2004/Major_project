
import express from 'express';
import registerUser from '../Controller/userController.js';
import updateUser from '../Controller/userController.js';
import insertUser from '../Controller/userController.js';
import deleteUser from '../Controller/userController.js';
const router = express.Router();

router.use(express.json())

router.post('/register',(req,res)=>
registerUser.registerUser(req,res))
router.post('/insert',(req,res)=>
insertUser.insertUser(req,res))
router.put('/update/:id',(req,res)=>
updateUser.updateUser(req,res))
//delete 
router.put('/delete/:id',(req,res)=>
deleteUser.deleteUser(req,res))
export default router;

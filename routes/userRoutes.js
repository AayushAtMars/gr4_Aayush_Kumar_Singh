import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

const userrouter = express.Router();

//create
userrouter.post('/', createUser);     

//fetch
userrouter.get('/', getAllUsers);     

export default userrouter;

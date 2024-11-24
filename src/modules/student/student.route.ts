import express from 'express';
import { studentController } from './student.controller';

export const router = express.Router();
//all router will be here
router.post('/create-student' , studentController.createStudent );
router.get('/get-student', studentController.getStudent)
router.get('/get-student/:id', studentController.getSingleStudent)
router.delete('deleted-student/:id',studentController.deleteStudent)
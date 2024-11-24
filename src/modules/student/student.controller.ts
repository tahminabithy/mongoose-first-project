import { Request, Response } from "express";
import { studentService } from "./student.service";

const createStudent = async(req:Request,res:Response)=>{
try{
const studentInfo = req.body.student;
const result = await studentService.createStudentInDb(studentInfo);
// send response to the client
res.status(200).json({
    success:true,
    message:"student created successfully",
    data:result
 })
}
 catch(err){
   console.log(err);
 }
}

const getStudent = async(req:Request,res:Response)=>{
  try{
    const result = await studentService.getStudentFromDb();
      res.status(200).json({
        success:true,
        message:"student fetched successfully",
        data:result
      })
  }
  catch(err){
    console.log(err);
  }
}
const getSingleStudent = async(req:Request,res:Response)=>{
  try{
    const id = req.params.id;
    const result = await studentService.getSingleStudentFromDb(id);
      res.status(200).json({
        success:true,
        message:"single student fetched successfully",
        data:result
      })
  }
  catch(err){
    console.log(err);
  }
}

export const studentController = {
    createStudent,
    getStudent,
    getSingleStudent
}
import { Student } from "./student.interface"
import studentModel from "./student.model"


const createStudentInDb = async (studentData:Student)=>{
  const result  = await studentModel.create(studentData)
  return result;
}
 const getStudentFromDb = async()=>{
    const result = await studentModel.find();
    return result;
 }

 const getSingleStudentFromDb = async (id:string)=>{
    const result = await studentModel.findOne({id:id});
    return result;
 }

export const studentService ={
    createStudentInDb,
    getStudentFromDb,
    getSingleStudentFromDb
}
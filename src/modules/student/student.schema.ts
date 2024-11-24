import { Schema } from "mongoose";
import { Student, TGuardian, TLocalGuardian } from "./student.interface";



const guardianSchema = new Schema<TGuardian>({
    fatherName:{type:String,required:true},
    fatherOccupation:{type:String,required:true},
    fatherContactNo:{type:String,required:true},
    motherName:{type:String,required:true},
    motherOccupation:{type:String,required:true},
    motherContactNo:{type:String,required:true}
  });

const localGuardianSchema = new Schema<TLocalGuardian>({
    name:{type:String,required:true},
    occupation:{type:String,required:true},
    contactNo:{type:String,required:true},
    address:{type:String,required:true}
  });

export const studentSchema = new Schema<Student>({
    id:{type:String,required:true},
    name:{
        firstName:{type:String,required:true},
        middleName:{type:String},
        lastName:{type:String,required:true}
    },
    gender:['male','female','other'],
    dateOfBirth:{type:String},
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    bloogGroup:['A+','A-','B+','B-','AB+','AB-','O+','O-'],
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive:['active','blocked'],
  });

 
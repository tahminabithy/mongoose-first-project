import { Schema } from "mongoose";
import { Student, TGuardian, TLocalGuardian, TUserName } from "./student.interface";

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
const userNameSchema = new Schema<TUserName>({
    
        firstName:{
            type:String,
            require:[true,'First Name is required'],
            maxLength:20,
            trim:true //remove space from start and end
        },
        middleName:{type:String},
        lastName:{type:String,required:[true,'Last Name is required']},
})
export const studentSchema = new Schema<Student>({
    id:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    name:userNameSchema,
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },
    dateOfBirth:{type:String},
    email:{type:String,required:true, unique:true},
    contactNo:{type:String,required:true},
    emergencyContactNo:{type:String,required:true},
    bloogGroup:{
        type:String,
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    presentAddress:{type:String,required:true},
    permanentAddress:{type:String,required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImg:{type:String},
    isActive:{
        type:String,
        enum:['active','blocked'],
        default:"active",
        required:true
    }
  });


//   mongoose middle ware 

// pre save hook
studentSchema.pre('find',function(next){
    const result = this.find({isDeleted:{$ne:true}});
    return result;
    next()
})

 
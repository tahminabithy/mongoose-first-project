import { model } from "mongoose";
import { Student } from "./student.interface";
import { studentSchema } from "./student.schema";

const studentModel = model<Student>("student",studentSchema);
export default studentModel;
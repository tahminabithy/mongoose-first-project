import { z } from "zod";

// Guardian Schema Validation
const guardianValidatedSchema = z.object({
  fatherName: z.string({ required_error: "Father Name is required" }),
  fatherOccupation: z.string({ required_error: "Father Occupation is required" }),
  fatherContactNo: z.string({ required_error: "Father Contact Number is required" }),
  motherName: z.string({ required_error: "Mother Name is required" }),
  motherOccupation: z.string({ required_error: "Mother Occupation is required" }),
  motherContactNo: z.string({ required_error: "Mother Contact Number is required" }),
});

// Local Guardian Schema Validation
const localGuardianValidatedSchema = z.object({
  name: z.string({ required_error: "Local Guardian Name is required" }),
  occupation: z.string({ required_error: "Local Guardian Occupation is required" }),
  contactNo: z.string({ required_error: "Local Guardian Contact Number is required" }),
  address: z.string({ required_error: "Local Guardian Address is required" }),
});
//user name validation
const userNameValidatedSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .max(20, "First Name must not exceed 20 characters")
    .trim(),
  middleName: z.string().optional(),
  lastName: z.string({ required_error: "Last Name is required" }).trim(),
});

// Student Schema Validation
const studentValidatedSchema = z.object({
  id: z.string({ required_error: "ID is required" }).trim().min(1, "ID cannot be empty"),
  password:z.string({required_error:"password is requird"}),
  name: userNameValidatedSchema,
  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
  }),
  dateOfBirth: z.string().optional(),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  contactNo: z.string({ required_error: "Contact Number is required" }),
  emergencyContactNo: z.string({ required_error: "Emergency Contact Number is required" }),
  bloogGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  presentAddress: z.string({ required_error: "Present Address is required" }),
  permanentAddress: z.string({ required_error: "Permanent Address is required" }),
  guardian: guardianValidatedSchema,
  localGuardian: localGuardianValidatedSchema,
  profileImg: z.string().optional(),
  isActive: z
    .enum(["active", "blocked"], {
      required_error: "Status is required",
    })
    .default("active"),
});

export default studentValidatedSchema ;





export interface Student{
    id: string;
    password: string;
    name: TUserName;
    gender: 'male' | 'female' | 'other';  //enum
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';   //enum
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string;
    isActive: 'active' | 'blocked';
    isDeleted: boolean;
}
export interface TUserName {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  
  export interface TGuardian {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
  };
  
  export interface TLocalGuardian {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
  };
  
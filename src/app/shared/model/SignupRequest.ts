import { Timestamp } from "rxjs";

export interface SignupRequest{

    fullname: string;
    username:string;
    emailId: string;
    mobileNumber: string;
    address: string;
    password: string;
    role?:string;
    isActive?:boolean;
    createdAt?:Date;
    updatedAt?:Date;
}
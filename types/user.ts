import { IAppointment } from "./appointments";
import { IBooking, IBookingWithServices } from "./bookings";
import { IMedicalRecord } from "./medical";
import { ITransaction } from "./transactions";

export enum IUserGender {
    MALE = "MALE",
    FEMAIL = "FEMALE",
}

export interface IUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    roleId: string;
    profilePicture?: string;
    accountStatus: {
        emailVerified: boolean;
        activated: boolean;
    };
    createdAt: Date;
    endUserId?: string;
    superAdminId?: string;
    accountManagerId?: string;
    adminId?: string;
    address?: string;
    age?: number;
    phone?: string;
    gender?: IUserGender;
}

export enum IRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    ACCOUNT_MANAGER = "ACCOUNT_MANAGER",
    END_USER = "END_USER",
}

export interface IUserWithRelations extends IUser {
    role: IRole;
    appointments?: IAppointment[];
    bookings?: IBookingWithServices[];
    transactions?: ITransaction[];
    medicalRecord?: IMedicalRecord;
}

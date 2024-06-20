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

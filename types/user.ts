export enum UserRole {
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
    EndUser = 'EndUser',
}

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    role: UserRole;
    accountStatus: {
        emailVerified: boolean;
        activated: boolean;
    }
}
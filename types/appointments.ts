export interface AppointmentTypes {
    name: string;
    createdAt: string;
    updatedAt: string;
    amount: number;
    status: string;
    preview_img: string;
    id: string;
}

export enum AppointmentStatus {
    DONE = "DONE",
    PENDING = "PENDING",
    CANCELLED = "CANCELLED",
}

export interface IAppointment {
    id: string;
    userId?: string;
    tempUserId?: string;
    parentAppointmentId?: string;
    reference: string;
    note?: string;
    date: Date;
    createdAt: Date;
    status: AppointmentStatus;
    title: string;
    meta: object;
}

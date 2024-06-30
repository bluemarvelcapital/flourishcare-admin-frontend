import { IAppointment } from "./appointments";
import { IService } from "./services";
import { ITransaction } from "./transactions";
import { IUser } from "./user";

export interface BookingsTypes {
    name: string;
    date: string;
    contract: number;
    ID: string;
    preview_img: string;
    status?: string;
}
export enum BookingStatus {
    DRAFT = "DRAFT",
    APPROVED = "APPROVED",
    CANCELLED = "CANCELLED",
}

export interface IBooking {
    id: string;
    userId: string;
    appointmentId: string;
    reference: string;
    paid: boolean;
    documents: {
        type:
            | "presignedContract"
            | "signedContract"
            | "carePlan"
            | "personalizedAssessmentReport";
        url: string;
        date: Date;
    }[];
    personalizedAssessmentReport?: string;
    carePlan?: string;
    contract?: string;
    invoice?: string;
    createdAt: Date;
    updatedAt: Date;
    approvalStatus: {
        contract: boolean;
        carePlan: boolean;
        personalizedAssessmentReport: boolean;
    };
    approvalTimestamps: {
        documentType: "contract" | "carePlan" | "personalizedAssessmentReport";
        date: Date;
    }[];
    status: BookingStatus;
}

export interface IBookingWithServices extends IBooking {
    services: IService[];
}

export interface IBookingWithUser extends IBooking {
    user: IUser;
}

export interface IBookingWithRelations extends IBooking {
    services: IService[];
    user: IUser;
    appointment: IAppointment;
    transactions?: ITransaction[];
}

const data: BookingsTypes[] = [
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "completed",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "canceled",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "completed",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "pending",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "pending",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "canceled",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "completed",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "pending",
    },
    {
        name: "Andre Iguodala",
        date: "May 25, 2023 05:43 PM",
        contract: 234,
        ID: "Flo-AM334",
        preview_img: "/bookings-user-image.svg",
        status: "completed",
    },
];

export { data };

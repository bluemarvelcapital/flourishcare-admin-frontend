import { PaymentCurrency } from "./transactions";

export enum ServiceStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    COMMING_SOON = "COMMING_SOON",
}

export interface IService {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: PaymentCurrency;
    duration: number;
    categoryIds: string[];
    previewImage: string;
    status: ServiceStatus;
    createdAt: Date;
}

export interface ApplicationTypes {
    name: string;
    date: string;
    service: string;
    amount: number;
    status: string;
}

export enum PaymentStatus {
    PENDING = "PENDING",
    SUCCESSFUL = "SUCCESSFUL",
    FAILED = "FAILED",
}
export enum PaymentProvider {
    STRIPE = "STRIPE",
    PAYSTACK = "PAYSTACK",
}

export enum PaymentCurrency {
    USD = "USD",
    GBP = "GBP",
}

export interface ITransaction {
    id: string;
    userId: string;
    reference: string;
    amount: number;
    bookingId: string;
    orderNumber: number;
    status: PaymentStatus;
    currency: PaymentCurrency;
    provider: PaymentProvider;
    providerReference: string;
    createdAt: Date;
}

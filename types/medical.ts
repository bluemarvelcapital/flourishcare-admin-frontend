export interface IMedicalRecord {
    id: string;
    userId: string;
    dateOfVisit?: Date;
    reasonForVisit?: string;
    physician?: string;
    clinic?: string;
    vitalSigns?: {
        bloodPressure: string;
        heartRate: number;
        temperature: number;
    };
    symptoms: string;
    physicalExamination: string;
    diagnosis?: { condition: string; icdCode: string };
    treatmentPlan?: {
        description: string;
        medications: { name: string; dosage: string }[];
    };
    labResults: { test: string; result: string; date: Date }[];
    imagingStudies?: { type: string; result: string; date: Date }[];
    procedures: {
        type: string;
        details: string;
        date: Date;
        outcome: string;
    }[];
    immunizationRecords?: {
        vaccine: string;
        dateAdministered: Date;
        nextDueDate: Date;
    }[];
    insuranceInfo?: {
        provider: string;
        policyNumber: string;
        groupNumber: string;
        policyHolder: string;
        coverage: string;
    };
    providerNotes?: string;
    patientNotes?: string;
    consentForms?: { type: string; url: string; dateSigned: Date }[];
    accessPermissions?: { user: string; permissions: string }[];
    createdAt: Date;
}

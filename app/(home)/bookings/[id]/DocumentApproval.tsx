import React from "react";
import { IBooking } from "@/types/bookings";
import { Button, Tooltip, message } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import FileLink from "@/components/FileLink";
import { TruncatedText } from "@/components/TruncatedText";
import { useUpdateDocumentApprovalForBookingMutation } from "@/services/booking.service";
import { ImBook } from "react-icons/im";
import { toast } from "react-toastify";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

interface IDocumentApproval {
    booking: IBooking;
    refreshData: () => void;
}

const DocumentApproval: React.FC<IDocumentApproval> = ({
    booking,
    refreshData,
}) => {
    const [updateDocumentApproval, { isLoading }] =
        useUpdateDocumentApprovalForBookingMutation();
    const onApproveDocument = (type: string) => {
        console.log("Approve document", type);
    };

    const handleUpdateDocumentApproval = async (
        type: IBooking["documents"][number]["type"],
    ) => {
        try {
            await updateDocumentApproval({
                bookingId: booking.id,
                documentType: type,
                approved: true,
            }).unwrap();

            message.success("Document approved successfully");
            refreshData();
        } catch (error) {
            message.error((error as any).data?.message ?? error);
        }
    };

    const documentTypes = {
        contract: "Contract",
        carePlan: "Care Plan",
        personalizedAssessmentReport: "Personalized Assessment Report",
    } as const;

    return (
        <div className="border rounded-md border-[#E4E7EC] mb-5 p-5 flex flex-col gap-y-5">
            <p className="text-xl">Documents </p>
            <div className="flex flex-col gap-y-4">
                {["carePlan", "personalizedAssessmentReport", "contract"].map(
                    (type) => {
                        const isApproved =
                            booking.approvalStatus[
                                type as keyof typeof booking.approvalStatus
                            ];
                        const approvalDate = booking.approvalTimestamps.find(
                            (approval) => approval.documentType === type,
                        )?.date;

                        const doc = Array.from(booking.documents)
                            .reverse()
                            .find(
                                (doc) =>
                                    doc.type ===
                                    (type === "contract"
                                        ? "presignedContract"
                                        : type),
                            );

                        console.log({ type, doc });

                        return (
                            <div
                                key={type}
                                className="flex justify-between items-center"
                            >
                                <div className="flex flex-col items-start">
                                    <p className="text-sm text-tertiary">
                                        {" "}
                                        {
                                            documentTypes[
                                                type as keyof typeof documentTypes
                                            ]
                                        }
                                    </p>
                                    {doc ? (
                                        <FileLink
                                            name={
                                                <TruncatedText text={doc.url} />
                                            }
                                            className={
                                                isApproved
                                                    ? `bg-[#D9EBF8] `
                                                    : ""
                                            }
                                            link={doc.url}
                                        />
                                    ) : (
                                        <p className="text-[10px] text-red bg-[#f7f7f7] p-2 text-center">
                                            File not found
                                        </p>
                                    )}
                                </div>

                                {isApproved ? (
                                    <p className="text-xs text-tertiary flex items-center">
                                        Approved on{" "}
                                        {new Date(
                                            approvalDate!,
                                        ).toLocaleDateString()}{" "}
                                        <ClockCircleOutlined className="ml-2" />
                                    </p>
                                ) : (
                                    <>
                                        {doc && (
                                            <Tooltip title="Approve Document">
                                                <Button
                                                    type="primary"
                                                    icon={
                                                        <CheckCircleOutlined />
                                                    }
                                                    onClick={() =>
                                                        handleUpdateDocumentApproval(
                                                            doc.type,
                                                        )
                                                    }
                                                >
                                                    Approve
                                                </Button>
                                            </Tooltip>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
};

interface IUploadHistory {
    booking: IBooking;
}

export const UploadHistory: React.FC<IUploadHistory> = ({ booking }) => {
    return (
        <>
            {booking.documents.length ? (
                <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-y-5 overflow-y-scroll max-h-[350px] custom-scrollbar">
                    <p className="text-xl">Upload History</p>
                    {booking.documents.map((doc, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <div>
                                <p className="text-sm text-tertiary mb-2">
                                    {doc.type
                                        .replace(/([A-Z])/g, " $1")
                                        .replace(/^./, (str) =>
                                            str.toUpperCase(),
                                        )}
                                </p>
                                <p className="text-xs text-tertiary">
                                    Uploaded on{" "}
                                    {new Date(doc.date).toLocaleDateString()}
                                </p>
                            </div>

                            <a
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary"
                            >
                                View Document
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <> </>
            )}
        </>
    );
};

export default DocumentApproval;

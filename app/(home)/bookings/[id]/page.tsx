"use client";

import React from "react";
import Header from "@/components/misc/Header";
import { MdOutlineEditCalendar } from "react-icons/md";
import AppointmentDetails from "./AppointmentDetails";
import PersonalInformation from "./PersonalInformation";
import { useParams } from "next/navigation";
import {
    IBooking,
    IBookingWithRelations,
    IBookingWithServices,
} from "@/types/bookings";
import {
    useGetBookingQuery,
    useUploadDocumentForBookingMutation,
} from "@/services/booking.service";
import { WindowSpinner } from "@/components/Spinner";
import ServiceDetails from "./ServiceDetails";
import { toast } from "react-toastify";
import GoBack from "@/components/GoBack";
import DocumentApproval, { UploadHistory } from "./DocumentApproval";
import { Modal, Upload, Button, Form, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const BookingOverview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [booking, setBooking] = React.useState<IBookingWithRelations | null>(
        null,
    );
    const { data, isLoading, refetch } = useGetBookingQuery(id ?? "");
    const [open, setOpen] = React.useState(false);
    const [pickedDocument, setPickedDocument] = React.useState<string>("");
    const [uploadFile, { isLoading: docUploadIsLoading }] =
        useUploadDocumentForBookingMutation();

    React.useEffect(() => {
        if (data?.data.booking) {
            setBooking(data.data.booking);
        }
        if (!isLoading && !data) {
            toast.error("Booking not found");
        }
    }, [data, isLoading]);

    const onUploadDocument = async (values: any) => {
        const { documentType, file } = values;
        console.log("Upload document", file, documentType);

        try {
            if (!documentType || !file) {
                toast.error("Please select a document type and upload a file.");
                return;
            }

console.log({ file})
            await uploadFile({ bookingId: id, file, documentType }).unwrap();
            message.success("Document uploaded successfully.");
            setOpen(false);
            refetch();
        } catch (error) {
            message.error(
                (error as any).data?.message ??
                    (error as any)?.message ??
                    "Failed to upload document.",
            );
        }
    };

    const handleUploadFile = async (
        file: File,
        documentType: IBooking["documents"][0]["type"],
    ) => {};

    return (
        <div className="flex flex-col">
            <GoBack />
            <div className="flex flex-col gap-y-12">
                <div className="flex justify-between items-center flex-row">
                    <div className="flex flex-row items-center">
                        <Header
                            header="Booking Overview"
                            paragraph="Booking details"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-x-4 mt-10">
                        <Button type="primary" onClick={() => setOpen(true)}>
                            <p>Update Documents</p>
                        </Button>
                    </div>
                </div>
                {booking ? (
                    <div className="grid grid-cols-1 gap-y-10 gap-x-10 md:grid-cols-3">
                        <PersonalInformation user={booking.user} />
                        <AppointmentDetails
                            appointment={booking.appointment}
                            user={booking.user}
                        />
                        <ServiceDetails services={booking.services} />
                        <DocumentApproval
                            refreshData={refetch}
                            booking={booking}
                        />
                        <UploadHistory booking={booking} />
                    </div>
                ) : (
                    <WindowSpinner />
                )}
                <Modal
                    title="Update Documents"
                    visible={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    footer={null}
                >
                    <Form onFinish={onUploadDocument}>
                        <Form.Item
                            name="documentType"
                            label="Document Type"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a document type",
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select document type"
                                onChange={(value) =>
                                    setPickedDocument(value as string)
                                }
                            >
                                <Option value="contract">Contract</Option>
                                <Option value="carePlan">Care Plan</Option>
                                <Option value="personalizedAssessmentReport">
                                    Personalized Assessment Report
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="file"
                            label="File"
                            valuePropName="file"
                            getValueFromEvent={(e) => e.file}
                            rules={[
                                {
                                    required: true,
                                    message: "Please upload a file",
                                },
                            ]}
                        >
                            <Upload
                                beforeUpload={() => false}
                                maxCount={1}
                                onChange={(info) => {
                                    const fileList = [...info.fileList];
                                    if (fileList.length > 1) {
                                        fileList.shift();
                                    }
                                }}
                            >
                                <Button icon={<UploadOutlined />}>
                                    Select File
                                </Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                loading={docUploadIsLoading}
                                type="primary"
                                htmlType="submit"
                                disabled={!pickedDocument}
                            >
                                Upload
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};

export default BookingOverview;

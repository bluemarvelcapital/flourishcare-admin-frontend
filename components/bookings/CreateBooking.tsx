import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useCreateBookingMutation } from "@/services/booking.service";
import { RootState } from "@/context/store";
import { IoClose } from "react-icons/io5";
import { addBookings } from "@/context/booking.slice";
import { toast } from "react-toastify";

const { Option } = Select;

const BookingForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [createBooking, { isLoading }] = useCreateBookingMutation();
    const { appointments } = useSelector(
        (state: RootState) => state.appointment,
    );
    const { services} = useSelector((state: RootState) => state.service);

    const [filteredAppointments, setFilteredAppointments] =
        useState(appointments);

    const handleFinish = async () => {
        try {
            const values = form.getFieldsValue() ;
            console.log({ values})
            const res = await createBooking(values).unwrap();
            dispatch(addBookings([res.data.booking]));
            form.resetFields();
            toast.success("Booking created successfully");
        } catch (error) {
            toast.error(
                "An error occurred while creating the booking:",
            );
        }
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item
                label="Appointment"
                name="appointmentId"
                rules={[
                    { required: true, message: "Please select an appointment" },
                ]}
            >
                <Select
                    showSearch
                    placeholder="Select an appointment"
                    onSearch={(value) => {
                        setFilteredAppointments(
                            appointments.filter((appointment) =>
                                appointment.title
                                    .toLowerCase()
                                    .includes(value.toLowerCase()),
                            ),
                        );
                    }}
                    filterOption={false}
                >
                    {filteredAppointments.map((appointment) => (
                        <Option key={appointment.id} value={appointment.id}>
                            {appointment.title}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Services"
                name="serviceIds"
                rules={[
                    {
                        required: true,
                        message: "Please select service(s)",
                    },
                ]}
            >
                <Select mode="multiple" placeholder="Select services">
                    {services.map((service) => (
                        <Option key={service.id} value={service.id}>
                            {service.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item className="w-full flex flex-row">
                <Button
                    type="primary"
                    className="ml-auto"
                    htmlType="submit"
                    loading={isLoading}
                >
                    Create Booking
                </Button>
            </Form.Item>
        </Form>
    );
};

export default function CreateBooking() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row my-auto">
            <Button
                type="primary"
                className="flex flex-row items-center bg-primary rounded-md hover:bg-secondary text-white p-5"
                onClick={() => setOpen(true)}
            >
                <p>Create Booking</p>
            </Button>
            <Modal
                width={"700px"}
                title={
                    <div>
                        <h2 className="text-2xl font-normal">
                            Create Booking{" "}
                        </h2>
                        <p className="font-normal text-[#ACACAC] mt-1">
                            Fill the details below to create a new booking
                        </p>
                    </div>
                }
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                closeIcon={<IoClose />}
                footer={null}
            >
                <BookingForm />
            </Modal>
        </div>
    );
}

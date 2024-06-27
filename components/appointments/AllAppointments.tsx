"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { AppointmentTypes } from "@/types/appointments";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { HiOutlineDotsVertical } from "react-icons/hi";

const statusOrder: Record<string, number> = {
    completed: 1,
    pending: 2,
    canceled: 3,
};
const columns: TableColumnsType<AppointmentTypes> = [
    {
        title: "Name",
        dataIndex: "name",
        responsive: ["lg"],
        render(value, record) {
            return (
                <div className="flex items-center gap-3">
                    <Image
                        alt={value}
                        src={record.preview_img}
                        width={55}
                        height={55}
                        style={{ objectFit: "cover", borderRadius: "800px" }}
                    />
                    <div className="flex flex-col gap-y-2">
                        <p>{record.name}</p>
                        <p>
                            <span className="bg-primary bg-opacity-20 text-black p-1">
                                ID{" "}
                            </span>{" "}
                            : {record.id}
                        </p>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Date",
        dataIndex: "createdAt",
        responsive: ["lg"],
        defaultSortOrder: "descend",
        sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
    },
    {
        title: "Amount",
        dataIndex: "amount",
        render(value, record) {
            return (
                <div className="flex items-center gap-3">${record.amount}</div>
            );
        },
        // @ts-ignore
    },
    {
        title: "Status",
        dataIndex: "status",
        // defaultSortOrder: "",
        filters: [
            {
                text: "Completed",
                value: "completed",
            },
            {
                text: "Pending",
                value: "pending",
            },
            {
                text: "canceled",
                value: "canceled",
            },
        ],
        filterMultiple: true,
        onFilter: (value, record) => record.status === value,
        sorter: (a, b) =>
            statusOrder[a.status.toLowerCase()] -
            statusOrder[b.status.toLowerCase()],
        render(value, record) {
            return (
                <div className="flex items-center">
                    {record.status.toLowerCase() === "completed" && (
                        <p className="bg-secondary rounded-full bg-opacity-20 text-secondary py-2 capitalize px-3">
                            {record.status}
                        </p>
                    )}
                    {record.status.toLowerCase() === "canceled" && (
                        <p className="bg-error-500 bg-opacity-20  rounded-full text-error-500 py-2 capitalize px-3">
                            {record.status}
                        </p>
                    )}
                    {record.status.toLowerCase() === "pending" && (
                        <p className="bg-[#FFBF00] bg-opacity-20  rounded-full text-[#FFBF00] py-2 capitalize px-3">
                            {record.status}
                        </p>
                    )}
                </div>
            );
        },
        // @ts-ignore
    },
    {
        title: "",
        dataIndex: "id",
        render(value, record) {
            return (
                <Popover
                    content={
                        <div className="flex flex-col gap-3 w-[100px]">
                            <div>
                                <Link
                                    href="/appointments/appointment-overview"
                                    className="cursor-pointer"
                                >
                                    View
                                </Link>
                            </div>
                            <p className="text-error-500 cursor-pointer">
                                Delete
                            </p>
                        </div>
                    }
                    arrow={false}
                    trigger={"hover"}
                >
                    <HiOutlineDotsVertical className="text-lg cursor-pointer" />
                </Popover>
            );
        },
    },
];

const data: AppointmentTypes[] = [
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "pending",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "completed",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "pending",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "canceled",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "pending",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "canceled",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "completed",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "canceled",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "pending",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "completed",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "pending",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
    {
        name: "Flourish Davidson",
        createdAt: "2021-09-01",
        updatedAt: "2021-09-01",
        amount: 2500.0,
        status: "canceled",
        id: "FLo-1495DD",
        preview_img: "/bookings-user-image.svg",
    },
];

const onChange: TableProps<AppointmentTypes>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

export const AllAppointments: React.FC = () => {
    //   const { data } = useGetBlogPostsQuery(null);
    console.log(data);
    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Appointments</h2>
                    <Avatar className="bg-primary">{data.length - 2}</Avatar>
                </div>
                <Input
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                />
            </div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
};

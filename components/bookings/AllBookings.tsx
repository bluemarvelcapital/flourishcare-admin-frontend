"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Image, Input, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useRouter } from "next/router";
import {
    BookingStatus,
    IBooking,
    IBookingWithUser,
    data,
} from "@/types/bookings";
import { BiSearch } from "react-icons/bi";
import TruncatedID, { TruncatedText } from "../TruncatedText";
const DefaultProfilePicture = data[0].preview_img;
import FileLink from "../FileLink";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { bookingApi, useGetBookingsQuery } from "@/services/booking.service";
import { setBookings } from "@/context/booking.slice";
import { useSearchParams } from "next/navigation";
import { FilterValue } from "antd/es/table/interface";
import { BookingView } from "./BookingView";
const onChange: TableProps<IBooking | IBookingWithUser>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

export const AllBookings: React.FC = () => {
    const { data } = useGetBookingsQuery();
    const { bookings } = useSelector((state: RootState) => state.booking);
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState(bookings);
    const params = useSearchParams();

    console.log({ params: params.get("status") });
    useEffect(() => {
        if (data?.data.bookings) {
            dispatch(setBookings(data.data.bookings));
        }
    }, [data, dispatch]);

    useEffect(() => {
        setFilteredData(bookings);
    }, [bookings]);

    const statusFilter: FilterValue = params.get("status")
        ? [params.get("status") as string]
        : [
              BookingStatus.DRAFT,
              BookingStatus.CANCELLED,
              BookingStatus.APPROVED,
          ];

    const columns: TableColumnsType<IBooking | IBookingWithUser> = [
        {
            title: "Name",
            dataIndex: "name",
            responsive: ["lg"],
            render(value, record) {
                return (
                    <div className="flex items-center flex-row gap-3">
                        {"user" in record ? (
                            <>
                                <Image
                                    alt={value}
                                    src={
                                        record.user.profilePicture ??
                                        DefaultProfilePicture
                                    }
                                    width={55}
                                    height={55}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "800px",
                                    }}
                                />
                                <div className="flex flex-col gap-2">
                                    <p>
                                        {record.user.firstname +
                                            record.user.lastname}
                                    </p>

                                    <div className="bg-primary text-[9px] whitespace-wrap bg-opacity-20 p-1 text-center">
                                        <TruncatedID
                                            text={record.user.id}
                                            maxLength={30}
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image
                                    alt={value}
                                    src={DefaultProfilePicture}
                                    width={55}
                                    height={55}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "800px",
                                    }}
                                />
                                <div className="flex flex-col gap-2">
                                    <p>{value}</p>
                                    <TruncatedID
                                        text={record.id}
                                        maxLength={30}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                );
            },
        },
        {
            title: "Date created",
            dataIndex: "createdAt",
            responsive: ["lg"],
            defaultSortOrder: "descend",
            sorter: (a, b) =>
                new Date(a.createdAt.toString()).getTime() -
                new Date(b.createdAt.toString()).getTime(),
            render(value) {
                return new Date(value).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                });
            },
        },
        {
            title: "Contract",
            dataIndex: "contract",
            defaultSortOrder: "descend",
            responsive: ["sm"],
            render(value, record) {
                const doc = record.documents.find(
                    (doc) => doc.type === "presignedContract",
                )?.url;
                const docIsApproved = record.approvalTimestamps.find(
                    (app) => app.documentType === "contract",
                );
                return (
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row h-[55px] w-44 items-center justify-center gap-x-5">
                            {doc ? (
                                <FileLink
                                    name={<TruncatedText text={doc} />}
                                    className={
                                        docIsApproved ? `bg-[#D9EBF8] ` : ""
                                    }
                                    link={doc}
                                />
                            ) : (
                                <p className="text-[10px] text-red bg-[#f7f7f7] p-2 text-center">
                                    No Presigned Contract
                                </p>
                            )}
                        </div>
                    </div>
                );
            },
        },
        {
            title: "Presigned Contract",
            dataIndex: "documents.presignedContract",
            defaultSortOrder: "descend",
            responsive: ["sm"],
            render(value, record) {
                const doc = record.documents.find(
                    (doc) => doc.type === "presignedContract",
                )?.url;
                const docIsApproved = record.approvalTimestamps.find(
                    (app) => app.documentType === "contract",
                );
                return (
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row h-[55px] w-44 items-center justify-center gap-x-5 rounded-md">
                            {doc ? (
                                <FileLink
                                    name={<TruncatedText text={doc} />}
                                    className={
                                        docIsApproved
                                            ? `bg-green-100 text-green-800`
                                            : ""
                                    }
                                    link={doc}
                                />
                            ) : (
                                <p className="text-[10px] text-red bg-[#f7f7f7] p-2 text-center">
                                    No Presigned Contract
                                </p>
                            )}
                        </div>
                    </div>
                );
            },
        },

        {
            title: "Status",
            dataIndex: "status",
            sorter: (a, b) => a.status.localeCompare(b.status),
            filters: [
                {
                    text: "Draft",
                    value: BookingStatus.DRAFT,
                },
                {
                    text: "Approved",
                    value: BookingStatus.APPROVED,
                },
                {
                    text: "Cancelled",
                    value: BookingStatus.CANCELLED,
                },
            ],
            defaultFilteredValue: statusFilter,
            onFilter: (value, record) => record.status === value,
            render(value) {
                let statusClass = "";

                switch (value) {
                    case BookingStatus.DRAFT:
                        statusClass = "bg-yellow-100 text-yellow-800";
                        break;
                    case BookingStatus.APPROVED:
                        statusClass = "bg-green-100 text-green-800";
                        break;
                    case BookingStatus.CANCELLED:
                        statusClass = "bg-red-100 text-red-800";
                        break;
                    default:
                        statusClass = "bg-gray-100 text-gray-800";
                        break;
                }

                return (
                    <div
                        className={`flex flex-row gap-x-2 p-2 rounded ${statusClass}`}
                    >
                        <p className="text-center w-full">{value}</p>
                    </div>
                );
            },
        },
        {
            title: "",
            dataIndex: "",
            render(value, record) {
                return <BookingView booking={record} />;
            },
        },
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        const result = bookings.filter(
            (booking: IBookingWithUser | IBooking) => {
                return (
                    booking.appointmentId.toLowerCase().includes(value) ||
                    booking.id.toLowerCase().includes(value) ||
                    booking.userId.toLowerCase().includes(value) ||
                    ("user" in booking &&
                        booking.user.firstname.toLowerCase().includes(value))
                );
            },
        );
        setFilteredData(result);
    };

    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Bookings</h2>
                    <Avatar className="bg-primary">
                        {filteredData.length}
                    </Avatar>
                </div>
                <Input
                    placeholder="Search Bookings"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                    onChange={handleSearch}
                />
            </div>
            <Table columns={columns} dataSource={filteredData} />
        </div>
    );
};

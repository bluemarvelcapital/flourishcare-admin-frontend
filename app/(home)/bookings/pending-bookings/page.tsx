"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { BookingsTypes, data } from "@/types/bookings";
import { BiSearch } from "react-icons/bi";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const columns: TableColumnsType<BookingsTypes> = [
  {
    title: "Name",
    dataIndex: "name",
    responsive: ["lg"],
    render(value, record) {
      return (
        <div className="flex items-center flex-row gap-3">
          <Image
            alt={value}
            src={record.preview_img}
            width={55}
            height={55}
            style={{ objectFit: "cover", borderRadius: "800px" }}
          />
          <div className="flex flex-col gap-2">
            <p>{record.name}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Appointment ID",
    dataIndex: "ID",
    render(value, record) {
      return (
        <div className="px-5 text-center py-2 bg-primary bg-opacity-20">
          {record.ID}
        </div>
      );
    },
  },
  {
    title: "Contract",
    dataIndex: "contract",
    defaultSortOrder: "descend",
    responsive: ["sm"],
    sorter: (a, b) => a.contract - b.contract,
    render(value, record) {
      return (
        <div className="flex flex-row h-[55px] w-44 items-center bg-[#F7F7F7] justify-center gap-x-5">
          <BsFileEarmarkPdfFill className="text-error-500" />
          <p>Contract - {record.contract}</p>
          <FiDownload className="text-black" />
        </div>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => Date.parse(a.date) - Date.parse(b.date),
  },
  {
    title: "Invoice",
    dataIndex: "",
    render(value, record) {
      return (
        <div className="flex flex-row h-[55px] w-44 items-center bg-[#F7F7F7] justify-center gap-x-5">
          <BsFileEarmarkPdfFill className="text-error-500" />
          <p>INV - {record.contract}</p>
          <FiDownload className="text-black" />
        </div>
      );
    },
  },
  {
    title: "Payment",
    dataIndex: "status",
    responsive: ["sm"],
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
    render(value, record) {
      return (
        <div className="flex flex-row gap-x-2">
          {record.status?.toLowerCase() === "completed" && (
            <p className="bg-secondary py-2 px-4 text-secondary capitalize bg-opacity-20 rounded-full font-semibold">
              {record.status}
            </p>
          )}
          {record.status?.toLowerCase() === "canceled" && (
            <p className="bg-error-500 py-2 px-4 text-error-500 capitalize bg-opacity-20 rounded-full font-semibold">
              {record.status}
            </p>
          )}
          {record.status?.toLowerCase() === "pending" && (
            <p className="bg-[#FFBF00] py-2 px-4 text-[#FFBF00] capitalize bg-opacity-20 rounded-full font-semibold">
              {record.status}
            </p>
          )}
        </div>
      );
    },
  },
];

const onChange: TableProps<BookingsTypes>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AllBookings: React.FC = () => {
  // const { data } = useGetBlogPostsQuery(null);
  // console.log(data);
  return (
    <div className="border flex flex-col justify-center gap-y-5 rounded-md border-[#E1E1E1 m-8">
      <ul className="flex px-4 mt-8 border-b border-[#E1E1E1] justify-start flex-row gap-x-5">
        <li className="border-b border-primary">History</li>
        <li>Approved</li>
        <li>Pending</li>
        <li>Cancelled</li>
      </ul>
      <div className="py-6 px-4">
        <Input
          placeholder="Search"
          size="large"
          prefix={<BiSearch />}
          className="md:w-[350px] focus:w-[1000px]"
        />
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default AllBookings;

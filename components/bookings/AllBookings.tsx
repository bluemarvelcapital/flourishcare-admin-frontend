"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { BookingsTypes, data } from "@/types/bookings";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import NoData from "../misc/NoData";
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
            <p>
              <span className="bg-primary bg-opacity-20">ID :</span>
              {record.ID}
            </p>
          </div>
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
    title: "Contract",
    dataIndex: "contract",
    defaultSortOrder: "descend",
    responsive : ["sm"],
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
    title: "",
    dataIndex: "",
    render() {
      return (
        <div className="flex flex-row gap-x-2">
          <div className="flex h-10 w-14 justify-center items-center p-2 bg-white border border-slate-300 text-stone-600 rounded-md">
            <FaPhoneAlt className=" " />
          </div>
          <div className="flex h-10 w-14 items-center justify-center rounded-md p-2 bg-secondary text-white">
            <MdOutlineMessage />
          </div>
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

export const AllBookings: React.FC = () => {
  // const { data } = useGetBlogPostsQuery(null);
  // console.log(data);
  return (
    <div>
      <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl">All Bookings</h2>
          <Avatar className="bg-primary">16</Avatar>
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

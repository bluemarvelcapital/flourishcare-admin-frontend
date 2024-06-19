"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { BlogI } from "@/types/blog";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { EditAppointment } from "./EditPost";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import NoData from "../misc/NoData";
import { MdLocalPhone } from "react-icons/md";

const statusOrder: Record<string, number> = {
  completed: 1,
  pending: 2,
  canceled: 3,
};
const columns: TableColumnsType<BlogI> = [
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
    title: "amount",
    dataIndex: "amount",
    render(value, record) {
      return <div className="flex items-center gap-3">${record.amount}</div>;
    },
    // @ts-ignore
  },
  {
    title: "status",
    dataIndex: "status",
    defaultSortOrder: "descend",
    sorter: (a, b) =>
      statusOrder[a.status.toLowerCase()] - statusOrder[b.status.toLowerCase()],
    render(value, record) {
      return (
        <div className="flex items-center">
          {record.status.toLowerCase() === "completed" && (
            <p className="bg-secondary rounded-md bg-opacity-20 text-secondary py-2 capitalize px-3">
              {record.status}
            </p>
          )}
          {record.status.toLowerCase() === "canceled" && (
            <p className="bg-error-500 bg-opacity-20  rounded-md text-error-500 py-2 capitalize px-3">
              {record.status}
            </p>
          )}
          {record.status.toLowerCase() === "pending" && (
            <p className="bg-[#FFBF00] bg-opacity-20  rounded-md text-[#FFBF00] py-2 capitalize px-3">
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
    responsive: ["lg"],
    render(value, record) {
      return (
        <div className="border flex items-center justify-center rounded-md border-tertiary p-3 text-tertiary">
          <MdLocalPhone />
        </div>
      );
    },
  },
];

const data: BlogI[] = [
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "pending",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "completed",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "pending",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "canceled",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "pending",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "canceled",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "completed",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "canceled",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "pending",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "completed",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "pending",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    name: "Nutrition Tips for Healthy Aging",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    amount: 2500.0,
    status: "canceled",
    id: "FLo-1495DD",
    preview_img:
      "/bookings-user-image.svg",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
];

const onChange: TableProps<BlogI>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const AllPosts: React.FC = () => {
//   const { data } = useGetBlogPostsQuery(null);
  console.log(data);
  return (
    <div>
      <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl">All Appointments</h2>
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

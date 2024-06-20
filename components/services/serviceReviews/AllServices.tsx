"use client";
import React from "react";
import { Avatar, Image, Input, Table, Switch } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { data, serviceReviewTypes } from "@/types/serviceReviews";
import { BiSearch } from "react-icons/bi";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import { RiDeleteBin6Fill } from "react-icons/ri";

const columns: TableColumnsType<serviceReviewTypes> = [
  {
    title: "Name",
    dataIndex: "title",
    responsive: ["lg"],
    render(value, record) {
      return (
        <div className="flex items-center gap-3">
          <Image
            alt={value}
            src={record.preview_img}
            width={100}
            height={55}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
          <div>
            <p>{record.serviceName}</p>
          </div>
        </div>
      );
    },
  },

  {
    title: "Category",
    dataIndex: "category",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.review.localeCompare(b.review),
  },
  {
    title: "Review",
    dataIndex: "review",
    responsive: ["lg"],
  },
  {
    title: "User Name",
    dataIndex: "userName",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.userName.localeCompare(b.userName),
  },
  {
    title: "User Email Address",
    dataIndex: "userEmail",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => a.review.localeCompare(b.review),
  },
  {
    title: "Active",
    dataIndex: "active",
    filters: [
      {
        text: "Active",
        value: true,
      },
      {
        text: "Inactive",
        value: false,
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.active === value,
    render(value, record) {
      return (
        <div className="">
          <Switch
            checked={record.active}
            disabled={true}
            className="text-secondary"
          />
        </div>
      );
    },
  },
  {
    title: "Delete",
    dataIndex: "",
    render() {
      return (
        <div className="text-error-500">
          <RiDeleteBin6Fill />
        </div>
      );
    },
  },
];

const onChange: TableProps<serviceReviewTypes>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const AllServices: React.FC = () => {
  //   const { data } = useGetBlogPostsQuery(null);
  //   console.log(data);
  return (
    <div>
      <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl">All Services</h2>
          <Avatar className="bg-primary">16</Avatar>
        </div>
        <Input
          placeholder="Search Reviews"
          size="large"
          prefix={<BiSearch />}
          className="md:w-[350px]"
        />
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

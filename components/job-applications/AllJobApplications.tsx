"use client";
import React from "react";
import { Avatar, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { ApplicationTypes } from "@/types/job-applications";
import { BiSearch } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { EditPost } from "../services/EditPost";

const columns: TableColumnsType<ApplicationTypes> = [
  {
    title: "Title",
    dataIndex: "title",
    responsive: ["lg"],
    render(value, record) {
      return <div className="flex items-center gap-3">{record.title}</div>;
    },
  },
  {
    title: "Date Posted",
    dataIndex: "postedAt",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => Date.parse(a.postedAt) - Date.parse(b.postedAt),
  },
  {
    title: "Application Deadline",
    dataIndex: "deadline",
    responsive: ["lg"],
    defaultSortOrder: "descend",
    sorter: (a, b) => Date.parse(a.deadline) - Date.parse(b.deadline),
  },
  {
    title: "Number of Applicants",
    dataIndex: "numberOfApplicants",
    render(value, record) {
      return (
        <div className="flex items-center gap-3">
          {record.numberOfApplicants}
        </div>
      );
    },
    // @ts-ignore
  },
  {
    title: "Job Location",
    dataIndex: "location",
    render(value, record) {
      return <div className="flex items-center gap-3">{record.location}</div>;
    },
    // @ts-ignore
  },
  {
    title: "",
    dataIndex: "id",
    render(value, record) {
      return (
        <div className="">
          <Popover
            content={
              <div className="flex flex-col gap-3 w-[100px]">
                <EditPost />
                <p className="cursor-pointer">View</p>
                <p className="text-error-500 cursor-pointer">Delete</p>
              </div>
            }
            arrow={false}
            trigger={"hover"}
          >
            <HiOutlineDotsVertical className="text-lg cursor-pointer" />
          </Popover>
        </div>
      );
    },
  },
];

const data: ApplicationTypes[] = [
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
  {
    title : "Homecare Assistant",
    postedAt: "May 25, 2023 05:43 PM",
    deadline: "2021-09-01",
    numberOfApplicants: 25,
    location: "Ontario, Canada"
  },
];

const onChange: TableProps<ApplicationTypes>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const AllJobApplications: React.FC = () => {
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
          placeholder="Search Applications"
          size="large"
          prefix={<BiSearch />}
          className="md:w-[350px]"
        />
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

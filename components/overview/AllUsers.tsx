"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
// import { EditPost } from "./EditPost";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import { data, OverviewTypes } from "../../types/overview";
import NoData from "../misc/NoData";
import Link from "next/link";
import { UserView } from "@/app/(home)/overview/all-users/UserTable";

const columns: TableColumnsType<OverviewTypes> = [
    {
        title: "Name",
        dataIndex: "name",
        render(value, record) {
            return (
                <div className="flex items-center gap-3">
                    <Image
                        alt={value}
                        src={record.preview_image}
                        width={55}
                        height={55}
                        style={{ objectFit: "cover", borderRadius: "8000px" }}
                    />
                    <div>
                        <p>{record.name}</p>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Email Address",
        dataIndex: "emailAddress",
        responsive: ["lg"],
    },
    {
        title: "Phone Number",
        dataIndex: "phoneNumber",
    },
    {
        title: "Address",
        dataIndex: "address",
        responsive: ["lg"],
    },
    {
        title: "",
        dataIndex: "",
        render() {
            return <UserView />;
        },
    },
];
const onChange: TableProps<OverviewTypes>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

export const AllUsers: React.FC = () => {
    // const { data } = useGetBlogPostsQuery(null);

    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <h2 className="text-xl">All Users</h2>
                    <Avatar className="bg-primary">3</Avatar>
                </div>
                <Input
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                />
                <button className="bg-secondary hover:bg-opacity-75 transition-all duration-300 ml-5 px-4 py-2 rounded-lg text-white">
                    <Link href="/overview/all-users">See All Users</Link>
                </button>
            </div>
            <Table
                columns={columns}
                // dataSource={data?.data.blogPosts ?? ([] as IBlogPost[])}
                dataSource={data}
                onChange={onChange}
            />
        </div>
    );
};

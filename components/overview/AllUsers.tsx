"use client";
import React, { useEffect, useState } from "react";
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
import { IUser } from "@/types/user";
import { useGetUsersQuery } from "@/services/user.service";

const columns: TableColumnsType<IUser> = [
    {
        title: "Name",
        dataIndex: "name",
        render(value, record) {
            return (
                <div className="flex items-center gap-3">
                    <Image
                        alt={value}
                        src={record.profilePicture ?? "/user-img-1.svg"}
                        width={55}
                        height={55}
                        style={{ objectFit: "cover", borderRadius: "8000px" }}
                    />
                    <div>
                        <p>{record.firstname + " " + record.lastname}</p>
                    </div>
                </div>
            );
        },
    },
    {
        title: "Email Address",
        dataIndex: "email",
        responsive: ["lg"],
    },
    {
        title: "Phone Number",
        dataIndex: "phone",
    },
    {
        title: "Address",
        dataIndex: "address",
        responsive: ["lg"],
    },
    {
        title: "",
        dataIndex: "",
        render(value, record) {
            return <UserView user={record} />;
        },
    },
];
const onChange: TableProps<IUser>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
    console.log("params", pagination, filters, sorter, extra);
};

export const AllUsers: React.FC<{ max: number }> = ({ max }) => {
    const { data, isLoading } = useGetUsersQuery();
    const [users, setUsers] = useState<IUser[]>([]);
    const [filteredData, setFilteredData] = useState<IUser[]>(users);

    useEffect(() => {
        if (data?.data.users) {
            setUsers(max ? data.data.users.slice(0, max) : data.data.users);
            setFilteredData(data.data.users);
        }
    }, [data]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        console.log(value);
        const result = users.filter((user) => {
            return (
                user.firstname.toLowerCase().includes(value) ||
                user.lastname.toLowerCase().includes(value) ||
                user.email.toLowerCase().includes(value) ||
                user.phone?.toLowerCase().includes(value) ||
                user.address?.toLowerCase().includes(value)
            );
        });
        setFilteredData(result);
    };

    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex flex-1 items-center gap-2">
                    <h2 className="text-xl">All Users</h2>
                    <Avatar className="bg-primary">{users.length}</Avatar>
                </div>
                <Input
                    placeholder="Search Users"
                    size="large"
                    prefix={<BiSearch />}
                    onChange={handleSearch}
                    className="md:w-[350px]"
                />
                <button className="bg-secondary hover:bg-opacity-75 transition-all duration-300 ml-5 px-4 py-2 rounded-lg text-white">
                    <Link href="/overview/all-users">See All Users</Link>
                </button>
            </div>
            <Table
                columns={columns}
                loading={isLoading}
                // dataSource={data?.data.blogPosts ?? ([] as IBlogPost[])}
                dataSource={filteredData}
                onChange={onChange}
            />
        </div>
    );
};

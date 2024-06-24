"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Switch, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import NoData from "../../../../components/misc/NoData";
import { EditService } from "../../../../components/services/EditService";
import { tableData, TableDataProps } from "@/types/listedServices";
import showConfirm from "@/components/services/DeleteService";

const columns: TableColumnsType<TableDataProps> = [
    {
        title: "Title",
        dataIndex: "title",
        render(value, record) {
            return (
                <div className="flex items-center gap-3">
                    <Image
                        alt={value}
                        src={record.image_url}
                        width={100}
                        height={55}
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <div>
                        <p>{record.title}</p>
                    </div>
                </div>
            );
        },
    },

    {
        title: "Category",
        dataIndex: "category",
        filters: [
            {
                text: "Health Care",
                value: "Health Care",
            },
            {
                text: "Social Care",
                value: "Social Care",
            },
        ],
        filterMultiple: false,
        // @ts-ignore
        onFilter: (value, record) => record.category === value,
    },
    {
        title: "Description",
        dataIndex: "description",
        responsive: ["lg"],
    },
    {
        title: "Price",
        dataIndex: "price",
        responsive: ["sm"],
        defaultSortOrder: "descend",
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: "Created",
        dataIndex: "createdAt",
        defaultSortOrder: "descend",
        sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
    },
    {
        title: "Active",
        dataIndex: "active",
        responsive: ["sm"],
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
        title: "",
        dataIndex: "",
        responsive: ["sm"],
        render() {
            return (
                <div className="">
                    <Popover
                        content={
                            <div className="flex flex-col gap-3 w-[100px]">
                                <EditService />
                                <p className="cursor-pointer">View</p>
                                <p
                                    className="text-error-500 cursor-pointer"
                                    onClick={showConfirm}
                                >
                                    Delete
                                </p>
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

const onChange: TableProps<TableDataProps>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
) => {
    console.log("params", pagination, filters, sorter, extra);
};

export const AllServices: React.FC = () => {
    const { data } = useGetBlogPostsQuery(null);
    console.log(data);
    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Services</h2>
                    <Avatar className="bg-primary">16</Avatar>
                </div>
                <Input
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                />
            </div>
            <Table
                columns={columns}
                dataSource={tableData}
                onChange={onChange}
            />
        </div>
    );
};

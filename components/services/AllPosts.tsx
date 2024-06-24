"use client";
import React from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IBlogPost } from "@/types/blog";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useGetBlogPostsQuery } from "@/services/blog.service";
import NoData from "../misc/NoData";
import { EditPost } from "./EditPost";

const columns: TableColumnsType<IBlogPost> = [
    {
        title: "Title",
        dataIndex: "title",
        render(value, record) {
            return (
                <div className="flex items-center gap-3">
                    <Image
                        alt={value}
                        src={record.preview_image}
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
        title: "Description",
        dataIndex: "description",
        responsive: ["lg"],
    },
    {
        title: "Category",
        dataIndex: "category",
        filters: [
            {
                text: "Health Care",
                value: "healthcare",
            },
        ],
        // @ts-ignore
        // onFilter: (value: string, record) =>
        //     record.category.indexOf(value) === 0,
    },
    {
        title: "Date",
        dataIndex: "createdAt",
        defaultSortOrder: "descend",
        sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
    },
    {
        title: "Price",
        dataIndex: "price",
        defaultSortOrder: "descend",
        sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
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
                </div>
            );
        },
    },
];

const onChange: TableProps<IBlogPost>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
    console.log("params", pagination, filters, sorter, extra);
};


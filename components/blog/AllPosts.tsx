"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Image, Input, Popover, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { EditPost } from "./EditPost";
import {
    useGetBlogPostsQuery,
    useGetBlogTagsQuery,
} from "@/services/blog.service";
import { useDispatch } from "react-redux";
import { setPosts, setTags } from "@/context/blog.slice";

export const AllPosts: React.FC = () => {
    const { data: postsData } = useGetBlogPostsQuery(null);
    const { data: tagsData } = useGetBlogTagsQuery(null);
    const dispatch = useDispatch();

    const [columns, setColumns] = useState<TableColumnsType<IBlogPost>>([]);
    const [filteredPosts, setFilteredPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        if (tagsData?.data.tags) {
            dispatch(setTags(tagsData.data.tags));
        }

        if (postsData?.data.blogPosts) {
            dispatch(setPosts(postsData.data.blogPosts));
        }

        if (tagsData?.data.tags && postsData?.data.blogPosts) {
            const categoryFilters = tagsData.data.tags.map((tag) => ({
                text: tag.name,
                value: tag.name.toLowerCase(),
            }));

            const columns: TableColumnsType<IBlogPost> = [
                {
                    title: "Name",
                    dataIndex: "title",
                    sorter: (a, b) => a.title.localeCompare(b.title),
                    render(value, record) {
                        return (
                            <div className="flex items-center gap-3">
                                <Image
                                    alt={value}
                                    src={record.preview_image}
                                    width={100}
                                    height={55}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                    }}
                                />
                                <div>
                                    <p>{record.title}</p>
                                </div>
                            </div>
                        );
                    },
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    responsive: ["lg"],
                    render(value) {
                        const statusColor =
                            value === IBlogPostStatus.PUBLISHED
                                ? "bg-success-400"
                                : value === IBlogPostStatus.DRAFT
                                  ? "bg-primary"
                                  : "bg-error-100";
                        return (
                            <div
                                className={`w-[100px] py-1 px-2 text-white rounded-md text-center ${statusColor}`}
                            >
                                {value}
                            </div>
                        );
                    },
                    sorter: (a, b) => a.status.localeCompare(b.status),
                },
                {
                    title: "Category",
                    dataIndex: "tags",
                    filters: categoryFilters,
                    onFilter: (value: any, record) =>
                        record.blogTags
                            .map((tag) => tag.name.toLowerCase())
                            .includes(value.toLowerCase()),
                    render: (_, record) => {
                        return (
                            <>
                                {record.blogTags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md"
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </>
                        );
                    },
                },
                {
                    title: "Date",
                    dataIndex: "createdAt",
                    defaultSortOrder: "descend",
                    sorter: (a, b) =>
                        Date.parse(a.createdAt) - Date.parse(b.createdAt),
                    render: (value) => new Date(value).toDateString(),
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
                                            <EditPost blogPost={record} />
                                            <p className="cursor-pointer">
                                                View
                                            </p>
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

            setColumns(columns);
        }
    }, [tagsData, postsData]);

    const onChange: TableProps<IBlogPost>["onChange"] = (
        pagination,
        filters,
        sorter,
        extra,
    ) => {};


    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Posts</h2>
                    <Avatar className="bg-primary">{
                        postsData?.data.blogPosts?.length ?? 0
                    }</Avatar>
                </div>
                <Input
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                    onChange={(e) => {
                        if (postsData?.data.blogPosts) {
                            setFilteredPosts(
                                postsData.data.blogPosts.filter((post) =>
                                    post.title
                                        .toLowerCase()
                                        .includes(e.target.value.toLowerCase()),
                                ),
                            );
                        }
                    }}
                />
            </div>
            <Table
                columns={columns}
                dataSource={
                    filteredPosts.length
                        ? filteredPosts
                        : postsData?.data.blogPosts ?? []
                }
                onChange={onChange}
            />
        </div>
    );
};

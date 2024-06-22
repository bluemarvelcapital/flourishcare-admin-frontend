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
import { useDispatch, useSelector } from "react-redux";
import { setPosts, setTags } from "@/context/blog.slice";
import { RootState } from "@/context/store";

export const AllPosts: React.FC = () => {
    const { data: postsData } = useGetBlogPostsQuery(null);
    const { data: tagsData } = useGetBlogTagsQuery(null);
    const { posts } = useSelector((state: RootState) => state.blog);
    const [allPosts, setAllPosts] = useState<IBlogPost[]>(posts);
    const dispatch = useDispatch();

    const [columns, setColumns] = useState<TableColumnsType<IBlogPost>>([]);
    const [filteredPosts, setFilteredPosts] = useState<IBlogPost[]>([]);

    useEffect(() => {
        if (posts.length) {
            setAllPosts(posts);
        }
    }, [posts]);

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
                                <div className="w-[100px] h-[55px] flex-shrink-0 bg-[#f1f1f1] px-auto py-auto">
                                    <Image
                                        width={100}
                                        height={55}
                                        src={record.preview_image}
                                        alt=""
                                        className="w-full h-full rounded-md object-contain"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>{" "}
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
                            value === IBlogPostStatus.DRAFT ||
                            value === IBlogPostStatus.PUBLISHED
                                ? "bg-primary"
                                : "bg-gray-200";
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
                                {record.blogTags?.map((tag) => (
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
                    <Avatar className="bg-primary">
                        {postsData?.data.blogPosts?.length ?? 0}
                    </Avatar>
                </div>
                <Input
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                    onChange={(e) => {
                        if (posts.length) {
                            setFilteredPosts(
                                posts.filter((post) =>
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
                dataSource={filteredPosts.length ? filteredPosts : allPosts}
                onChange={onChange}
                className="primary-header-table"
            />
        </div>
    );
};

export default AllPosts;

"use client";
import React, { useEffect } from "react";
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
import NoData from "../misc/NoData";
import { useDispatch } from "react-redux";
import { setPosts, setTags } from "@/context/blog.slice";

const columns: TableColumnsType<IBlogPost> = [
    {
        title: "Name",
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
        title: "Author",
        dataIndex: "author",
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
        onFilter: (value: string, record) =>
            record.blogTags
                .map((tag) => tag.name.toLowerCase())
                .includes(value.toLowerCase()),
        render: (_, record) =>
            record.blogTags.map((tag) => tag.name).join(", "),
    },
    {
        title: "Date",
        dataIndex: "createdAt",

        defaultSortOrder: "descend",
        sorter: (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt),
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

const data: IBlogPost[] = [
    {
        title: "Nutrition Tips for Healthy Aging",
        createdAt: "2021-09-01",
        blogTags: [{ id: "1", name: "Health Care" }],
        id: "1",
        status: IBlogPostStatus.PUBLISHED,
        description: "",
        content: "",
        preview_image:
            "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
        cover_image:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        title: "Nutrition Tips for Healthy Aging",
        createdAt: "2021-09-01",
        blogTags: [{ id: "1", name: "Health Care" }],
        id: "1",
        status: IBlogPostStatus.PUBLISHED,
        description: "",
        content: "",
        preview_image:
            "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
        cover_image:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        title: "Nutrition Tips for Healthy Aging",
        createdAt: "2021-09-01",
        blogTags: [{ id: "1", name: "Health Care" }],
        id: "2",
        status: IBlogPostStatus.PUBLISHED,
        description: "",
        content: "",
        preview_image:
            "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
        cover_image:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
    {
        title: "Nutrition Tips for Healthy Aging",
        createdAt: "2021-09-01",
        blogTags: [{ id: "1", name: "Health Care" }],
        id: "3",
        status: IBlogPostStatus.PUBLISHED,
        description: "",
        content: "",
        preview_image:
            "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
        cover_image:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    },
];

const onChange: TableProps<IBlogPost>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
) => {
};

export const AllPosts: React.FC = () => {
    const { data: postsData } = useGetBlogPostsQuery(null);
    const { data: tagsData } = useGetBlogTagsQuery(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tagsData?.data.tags) {
            dispatch(setTags(tagsData.data.tags));
        }

        if (postsData?.data.blogPosts) {
            dispatch(setPosts(postsData.data.blogPosts));
        }
    }, [tagsData, postsData]);

    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Posts</h2>
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
                dataSource={postsData?.data.blogPosts ?? ([] as IBlogPost[])}
                onChange={onChange}
            />
        </div>
    );
};

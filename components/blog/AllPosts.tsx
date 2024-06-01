"use client"
import React, { useEffect, useState } from "react"
import { Avatar, Image, Input, Popover, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { BlogI } from "@/types/blog"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { EditPost } from "./EditPost"
import { useGetBlogPostsQuery } from "@/services/blog.service"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "@/context/blog.slice"
import DateUtil from "@/utils/date"
import { RootState } from "@/context/store"
import { useLocalStorage } from "usehooks-ts"

const columns: TableColumnsType<BlogI> = [
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
            )
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
        onFilter: (value: string, record) => record.category === value,
    },
    {
        title: "Status",
        dataIndex: 'status',
        filters: [
            {
                text: "Published",
                value: "published",
            },
            {
                text: "Draft",
                value: "draft",
            },
        ],
        // @ts-ignore
        onFilter: (value: string, record) => record.status === value,
    },
    {
        title: "Date",
        dataIndex: "createdAt",
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
                                <EditPost post={
                                    {
                                        id: record.id,
                                        title: record.title,
                                        category: record.category,
                                        createdAt: record.createdAt,
                                        updatedAt: record.updatedAt,
                                        tags: record.tags,
                                        cover_image: record.cover_image,
                                        preview_image: record.preview_image,
                                        content: record.content,
                                        description: record.description,
                                        status: record.status
                                    }
                                } />
                                {/* <p className="cursor-pointer">View</p> */}
                                <p className="text-error-500 cursor-pointer">Delete</p>
                            </div>
                        }
                        arrow={false}
                        trigger={"hover"}
                    >
                        <HiOutlineDotsVertical className="text-lg cursor-pointer" />
                    </Popover>
                </div>
            )
        },
    },
]

const onChange: TableProps<BlogI>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
) => {
    console.log("params", pagination, filters, sorter, extra)
}
const { Search } = Input;

const AllPosts: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [localStorage, setLocalStorage] = useLocalStorage('postsExist', false)

    const { data: apiData } = useGetBlogPostsQuery(null);
    const dispatch = useDispatch();
    const { posts } = useSelector((state: RootState) => state.blog);

    useEffect(() => {
        if (apiData?.data.blogPosts) {
            setLocalStorage(true)
            dispatch(setPosts(apiData.data.blogPosts));
        } else {
            setLocalStorage(false)
        }
    }, [apiData?.data.blogPosts, dispatch, setLocalStorage]);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
        || post.tags.includes(searchQuery.toLowerCase())
        || post.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Posts</h2>
                    <Avatar className="bg-primary">{posts.length || 0}</Avatar>
                </div>
                <Search
                    placeholder="Search Posts"
                    size="large"
                    prefix={<BiSearch />}
                    className="md:w-[350px]"
                    onSearch={handleSearch}
                />
            </div>
            <Table
                columns={columns}
                dataSource={filteredPosts.map(post => ({
                    title: post.title,
                    category: 'healthcare',
                    createdAt: DateUtil.convertDateStringToLocaleToYMDD(post.createdAt),
                    updatedAt: DateUtil.convertDateStringToLocaleToYMDD(post.updatedAt),
                    description: post.description,
                    preview_image: post.preview_image,
                    cover_image: post.cover_image,
                    content: post.content,
                    tags: post.tags,
                    status: post.status,
                    id: post.id
                }))}
                pagination={{ pageSize: 5 }}
                onChange={onChange}
            />
        </div>
    );
};

export { AllPosts };
"use client"
import React, { useEffect } from "react"
import { Avatar, Image, Input, Popover, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { BlogI } from "@/types/blog"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { EditPost } from "./EditPost"
import { useGetBlogPostsQuery } from "@/services/blog.service"
import { useDispatch } from "react-redux"
import { addDraftBlogPosts, addPublisedBlogPosts, setDraftBlogPosts, setPublishedBlogPosts } from "@/context/blog.slice"
import DateUtil from "@/utils/date"

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
        onFilter: (value: string, record) => record.category.indexOf(value) === 0,
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
            )
        },
    },
]

// const data: BlogI[] = [
//     {
//         title: "Nutrition Tips for Healthy Aging",
//         category: "healthcare",
//         createdAt: "2021-09-01",
//         updatedAt: "2021-09-01",
//         tags: ["nice", "developer"],
//         author: "John Smith",
//         description: "",
//         content: "",
//         preview_image:
//             "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
//         cover_image:
//             "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     },
//     {
//         title: "Nutrition Tips for Healthy Aging",
//         category: "healthcare",
//         createdAt: "2021-09-01",
//         updatedAt: "2021-09-01",
//         tags: ["nice", "developer"],
//         author: "John Smith",
//         description: "",
//         content: "",
//         preview_image:
//             "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
//         cover_image:
//             "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     },
//     {
//         title: "Nutrition Tips for Healthy Aging",
//         category: "healthcare",
//         createdAt: "2021-09-01",
//         updatedAt: "2021-09-01",
//         tags: ["nice", "developer"],
//         author: "John Smith",
//         description: "",
//         content: "",
//         preview_image:
//             "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
//         cover_image:
//             "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     },
//     {
//         title: "Nutrition Tips for Healthy Aging",
//         category: "healthcare",
//         createdAt: "2021-09-01",
//         updatedAt: "2021-09-01",
//         tags: ["nice", "developer"],
//         author: "John Smith",
//         description: "",
//         content: "",
//         preview_image:
//             "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
//         cover_image:
//             "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
//     },
// ]

const onChange: TableProps<BlogI>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
) => {
    console.log("params", pagination, filters, sorter, extra)
}

export const AllPosts: React.FC = () => {
    const { data: apiData } = useGetBlogPostsQuery(null)
    const dispatch = useDispatch()

    console.log({ apiData })
    useEffect(() => {
        if (apiData?.data.blogPosts) {
            const publishedBlogPosts = apiData.data.blogPosts.filter(post => post.status === 'published')
            const draftBlogPosts = apiData.data.blogPosts.filter(post => post.status === 'draft')

            console.log({
                publishedBlogPosts,
                draftBlogPosts
            })

            dispatch(setPublishedBlogPosts(publishedBlogPosts))
            dispatch(setDraftBlogPosts(draftBlogPosts))
        }

    }, [apiData?.data, dispatch])
    return (
        <div>
            <div className="mb-4 flex md:flex-row flex-col gap-3 md:items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">All Posts</h2>
                    <Avatar className="bg-primary">{apiData?.data.blogPosts.length || 0}</Avatar>
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
                dataSource={apiData?.data.blogPosts.map(post => ({
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
                onChange={onChange}
            />
        </div>
    )
}

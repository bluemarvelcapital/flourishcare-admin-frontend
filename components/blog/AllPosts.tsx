"use client"
import React from "react"
import { Avatar, Image, Input, Popover, Table } from "antd"
import type { TableColumnsType, TableProps } from "antd"
import { BlogI } from "@/types/blog"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { EditPost } from "./EditPost"
import { useGetBlogPostsQuery } from "@/services/blog.service"

const columns: TableColumnsType<BlogI> = [
  {
    title: "Name",
    dataIndex: "title",
    render(value, record) {
      return (
        <div className="flex items-center gap-3">
          <Image
            alt={value}
            src={record.preview_img}
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
      )
    },
  },
]

const data: BlogI[] = [
  {
    title: "Nutrition Tips for Healthy Aging",
    category: "healthcare",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    tags: ["nice", "developer"],
    author: "John Smith",
    description: "",
    content: "",
    preview_img:
      "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    title: "Nutrition Tips for Healthy Aging",
    category: "healthcare",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    tags: ["nice", "developer"],
    author: "John Smith",
    description: "",
    content: "",
    preview_img:
      "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    title: "Nutrition Tips for Healthy Aging",
    category: "healthcare",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    tags: ["nice", "developer"],
    author: "John Smith",
    description: "",
    content: "",
    preview_img:
      "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  },
  {
    title: "Nutrition Tips for Healthy Aging",
    category: "healthcare",
    createdAt: "2021-09-01",
    updatedAt: "2021-09-01",
    tags: ["nice", "developer"],
    author: "John Smith",
    description: "",
    content: "",
    preview_img:
      "https://www.figma.com/file/b3EMEjIO5usiDthl0I4Yxz/image/d6cc761a47a4339500c9fd46030863e87528e8da",
    cover_img:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
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

export const AllPosts: React.FC = () => {
  const { data } = useGetBlogPostsQuery(null)
  console.log(data)
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
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

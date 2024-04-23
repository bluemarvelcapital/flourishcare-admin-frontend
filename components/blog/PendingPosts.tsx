"use client"
import { Avatar, Image, Popover } from "antd"
import React from "react"
import { IoFilter } from "react-icons/io5"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { EditPost } from "./EditPost"
import { useSelector } from "react-redux"
import { RootState } from "@/context/store"
import { BlogI } from "@/types/blog"

export const PendingPosts = () => {
    const { draftBlogPosts: data } = useSelector((state: RootState) => state.blog)

    return (
        <div className="border-[1px] border-[#E4E7EC] px-7 py-7 rounded-xl">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl">Pending Posts</h2>
                    <Avatar className="bg-primary">{data.length}</Avatar>
                </div>
                <Popover trigger={"click"} arrow={false}>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <IoFilter />
                        <p>Filter</p>
                    </div>
                </Popover>
            </div>
            <div className="flex flex-col gap-[1rem] mt-7">
                {data.map((post, index) => (
                    <div key={index} className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Image
                                width={100}
                                height={55}
                                src={post.preview_image}
                                alt=""
                                className="w-[50px] h-[50px] rounded-md object-cover"
                            />
                            <div>
                                <p className="text-[14px]">{post.title}</p>
                            </div>
                        </div>
                        <Popover
                            content={
                                <div className="flex flex-col gap-3 w-[100px]">
                                    <EditPost post={{ ...post, category: 'healthcare' }} />
                                    <p className="cursor-pointer">Publish</p>
                                    <p className="text-error-500 cursor-pointer">Delete</p>
                                </div>
                            }
                            trigger={"hover"}
                            arrow={false}
                        >
                            <HiOutlineDotsVertical className="text-lg cursor-pointer" />
                        </Popover>
                    </div>
                ))
                }
            </div >
        </div >
    )
}

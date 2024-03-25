"use client"
import { CreatePost } from "@/components/blog/CreatePost"
import { MetaData } from "@/components/blog/MetaData"
import React from "react"

const AdminBlog = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="md:text-4xl text-2xl md:mb-1">Blog Posts</h2>
          <p className="text-[14px]">Welcome to the blog post, Jenny</p>
        </div>
        <CreatePost />
      </div>
      <MetaData />
    </div>
  )
}

export default AdminBlog

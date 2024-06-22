"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { BlogForm, EditBlogForm } from "./BlogForm";
import { IBlogPost } from "@/types/blog";
import { IoClose } from "react-icons/io5";

export const EditPost = ({ blogPost }: { blogPost: IBlogPost }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <p
                className="text-primary cursor-pointer"
                onClick={() => setOpen(true)}
            >
                Edit
            </p>
            <Modal
                width={"700px"}
                title={
                    <div>
                        <h2 className="text-2xl font-normal">Edit Blog Post</h2>
                        <p className="font-normal text-[#ACACAC] mt-1">
                            Fields must be filled and cannot be empty
                        </p>
                    </div>
                }
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                closeIcon={<IoClose />}
                footer={null}
            >
                <EditBlogForm blogPost={blogPost} />
            </Modal>
        </>
    );
};

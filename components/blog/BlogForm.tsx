"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { BlogEditor } from "./BlogEditor";
import { UploadMedia } from "./UploadMedia";
import { IBlogPost } from "@/types/blog";
import { useForm } from "antd/es/form/Form";

export const BlogForm = () => {
    return (
        <div className="mt-5">
            <Form layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the title",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the category",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <BlogEditor />
                </Form.Item>
                <Form.Item
                    label="Preview Image"
                    name="preview_image"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the preview image",
                        },
                    ]}
                >
                    <UploadMedia id={"preview_image"} />
                </Form.Item>
                <Form.Item
                    label="Cover Image"
                    name="cover_image"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the cover image",
                        },
                    ]}
                >
                    <UploadMedia id={"cover_image"} />
                </Form.Item>
                <Button
                    type="primary"
                    className="bg-secondary w-full"
                    size="large"
                >
                    Create Post
                </Button>
            </Form>
        </div>
    );
};

export const EditBlogForm = ({ blogPost }: { blogPost: IBlogPost }) => {
    return (
        <div className="mt-5">
            <Form layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the title",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Category"
                    name="category"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the category",
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <BlogEditor />
                </Form.Item>
                <Form.Item
                    label="Preview Image"
                    name="preview_image"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the preview image",
                        },
                    ]}
                >
                    <UploadMedia id={"preview_image"} />
                </Form.Item>
                <Form.Item
                    label="Cover Image"
                    name="cover_image"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the cover image",
                        },
                    ]}
                >
                    <UploadMedia id={"cover_image"} />
                </Form.Item>
                <Button
                    type="primary"
                    className="bg-secondary w-full"
                    size="large"
                >
                    Create Post
                </Button>
            </Form>
        </div>
    );
};

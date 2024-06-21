"use client";
import { Button, Form, Input } from "antd";
import React from "react";
import { BlogEditor } from "./BlogEditor";
import { UploadMedia } from "./UploadMedia";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { useForm } from "antd/es/form/Form";
import { useUpdateBlogPostMutation } from "@/services/blog.service";
import { toast } from "react-toastify";

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
    const [form, setForm] = Form.useForm<{
        id: string;
        title: string;
        description: string;
        status: IBlogPostStatus;
        content: string;
        preview_image: string | File | null;
        cover_image: string | File | null;
    }>();
    const [updateBlogPost, { isLoading }] = useUpdateBlogPostMutation();

    const handleFinish = async (values: any) => {
        const { preview_image, cover_image, ...rest } = values;
        const body = { ...rest, blogPostId: blogPost.id };

        if (preview_image && preview_image.file) {
            body.preview_image = preview_image.file.originFileObj;
        }

        if (cover_image && cover_image.file) {
            body.cover_image = cover_image.file.originFileObj;
        }

        try {
            await updateBlogPost(body).unwrap();
            toast.success("Blog post updated successfully");
        } catch (error) {
            toast.error(
                (error as any).message ??
                    "An error occurred. Please try again.",
            );
        }
    };

    return (
        <div className="mt-5">
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    id: blogPost.id,
                    title: blogPost.title,
                    description: blogPost.description,
                    status: blogPost.status,
                    content: blogPost.content,
                    preview_image: blogPost.preview_image,
                    cover_image: blogPost.cover_image,
                }}
                onFinish={handleFinish}
            >
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
                >
                    <Input
                        size="large"
                        disabled
                        value={blogPost.blogTags
                            .map((tag) => tag.name.toUpperCase())
                            .join(", ")}
                    />
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
                    <BlogEditor content={blogPost.description} setContent={(value) => setForm({ ...form, description: value})} />
                </Form.Item>
                <Form.Item
                    label="Preview Image"
                    name="preview_image"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return e && e.fileList;
                    }}
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
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return e && e.fileList;
                    }}
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
                    htmlType="submit"
                    loading={isLoading}
                >
                    Update Post
                </Button>
            </Form>
        </div>
    );
};

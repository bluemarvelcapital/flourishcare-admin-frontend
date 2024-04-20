"use client"
import { Button, Form, Input } from "antd"
import React from "react"
import { BlogEditor } from "./BlogEditor"
import { UploadMedia } from "./UploadMedia"
import { BlogI } from "@/types/blog"
import { useCreateBlogPostMutation, useUpdateBlogPostMutation } from "@/services/blog.service"
import { useDispatch } from "react-redux"

export const BlogForm = ({ post }: { post?: BlogI }) => {
    const [createBlogPost, { isLoading: createIsLoading }] = useCreateBlogPostMutation()
    const [updateBlogPost, { isLoading: updateIsLoading }] = useUpdateBlogPostMutation()
    const dispatch = useDispatch()

    const submitForm = async (values: BlogI) => {
        console.log({ formValues: values })
        if (post?.id) {
            await updateBlogPost({ ...values, blogPostId: post.id })
        } else {
            await createBlogPost(values)
        }
    }

    return (
        <div className="mt-5">
            <Form layout="vertical" onFinish={submitForm}>
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
                    initialValue={post?.title}
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
                    initialValue={post?.category}
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
                    initialValue={post?.description}
                >
                    <Input size="large" />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the content",
                        },
                    ]}
                    initialValue={post?.content}
                >
                    <BlogEditor content={post?.content} />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name='status'
                    initialValue={post?.status}>
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
                    initialValue={post?.preview_image}
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
                    initialValue={post?.cover_image}
                >
                    <UploadMedia id={"cover_image"} />
                </Form.Item>
                <Button type="primary" htmlType="submit" className="bg-secondary w-full" size="large">
                    {
                        post?.id ? 'Update Post' : 'Create Post'
                    }
                </Button>
            </Form>
        </div >
    )
}

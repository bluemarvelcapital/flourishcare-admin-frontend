"use client"
import { Button, Form, Input, Select } from "antd"
import React, { useEffect, useState } from "react"
import { BlogEditor } from "./BlogEditor"
import { UploadMedia } from "./UploadMedia"
import { BlogI } from "@/types/blog"
import { useCreateBlogPostMutation, useUpdateBlogPostMutation } from "@/services/blog.service"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { addPosts, updatePost } from "@/context/blog.slice"

async function convertImageToBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            resolve(reader.result as string)
        }
        reader.onerror = reject
        reader.readAsDataURL(file)
    })
}

export const BlogForm = ({ post }: { post?: BlogI }) => {
    const [createBlogPost, { isLoading: createIsLoading }] = useCreateBlogPostMutation()
    const [updateBlogPost, { isLoading: updateIsLoading }] = useUpdateBlogPostMutation()
    const [previewImage, setPreviewImage] = useState<string | File>(post?.preview_image ?? '')
    const [coverImage, setCoverImage] = useState<string | File>(post?.cover_image ?? '')
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    useEffect(() => {
        console.log({ coverImage, previewImage })
    }, [coverImage, previewImage])

    const submitForm = async (values: BlogI) => {
        let updatedPost: BlogI | undefined
        let action: 'create' | 'update' = 'create'
        if (post?.id) {
            await updateBlogPost({
                ...values, blogPostId: post.id,
                preview_image: previewImage && typeof previewImage != 'string' ? await convertImageToBase64(previewImage) : undefined,
                cover_image: coverImage && typeof coverImage != 'string' ? await convertImageToBase64(coverImage) : undefined
            }).unwrap().then(res => {
                updatedPost = {
                    ...res.data.blogPost,
                    id: res.data.blogPost.id,
                    preview_image: res.data.blogPost.preview_image,
                    cover_image: res.data.blogPost.cover_image
                }
            })
            action = 'update'
        } else {
            action = 'create'
            if (previewImage && coverImage) {
                console.log({ values, action, previewImage: await convertImageToBase64(previewImage as File), coverImage: await convertImageToBase64(coverImage as File) })
                values.preview_image = await convertImageToBase64(previewImage as File)
                values.cover_image = await convertImageToBase64(coverImage as File)

                console.log({ values })

                await createBlogPost({
                    ...values,
                }).unwrap().then(res => {
                    updatedPost = {
                        ...res.data.blogPost,
                        id: res.data.blogPost.id,
                        preview_image: res.data.blogPost.preview_image,
                        cover_image: res.data.blogPost.cover_image
                    }
                })
            }
        }

        console.log({ updatedPost })

        if (updatedPost) {
            dispatch({ create: addPosts([updatedPost]), update: updatePost(updatedPost) }[action])
            toast.success(`Post ${action}d  successfully`)
        }
    }

    const handleStatusChange = (value: string) => {
        form.setFieldsValue({ status: value });
    };

    return (
        <div className="mt-5">
            <Form layout="vertical" onFinish={submitForm} form={form}>
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
                    <Input size="large" onChange={(e) => form.setFieldValue('title', e.target.value)} />
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
                    <Input size="large" onChange={(e) => form.setFieldValue('category', e.target.value)} />
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
                    <Input size="large" onChange={(e) => form.setFieldValue('description', e.target.value)} />
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
                    <BlogEditor content={post?.content} updateContent={(content) => form.setFieldValue("content", content)} />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name='status'
                    initialValue={post?.status}>
                    <Select style={({ width: '100%' })}>
                        <Select.Option value="draft" onClick={() => {
                            handleStatusChange('draft')
                            form.setFieldValue('status', 'draft')
                        }}>Draft</Select.Option>
                        <Select.Option value="published" onClick={() => {
                            handleStatusChange('published')
                            form.setFieldValue('status', 'published')
                        }}>Published</Select.Option>
                        <Select.Option value="hidden" onClick={() => {
                            handleStatusChange('hidden')
                            form.setFieldValue('status', 'hidden')
                        }}>Hidden</Select.Option>
                    </Select>
                </Form.Item >
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
                    initialValue={previewImage}
                >
                    <UploadMedia id={"preview_image"} existingFile={post?.preview_image} setImage={(image: File) => {
                        setPreviewImage(image)
                        form.setFieldValue('preview_image', image)
                    }} />
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
                    initialValue={coverImage}
                >
                    <UploadMedia id={"cover_image"} existingFile={post?.cover_image} setImage={(image: File) => {
                        setCoverImage(image)
                        form.setFieldValue('cover_image', image)
                    }} />
                </Form.Item>
                <Button loading={createIsLoading || updateIsLoading} type="" htmlType="submit" className="bg-secondary w-full" size="large">
                    {
                        post?.id ? 'Update Post' : 'Create Post'
                    }
                </Button>
            </Form >
        </div >
    )
}

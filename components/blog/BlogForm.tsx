import { Button, Form, Input, Select } from "antd";
import React from "react";
import { BlogEditor } from "./BlogEditor";
import { UploadMedia } from "./UploadMedia";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { FormInstance, useForm } from "antd/es/form/Form";
import { useUpdateBlogPostMutation } from "@/services/blog.service";
import { toast } from "react-toastify";

export const BlogForm = ({ blogPost }: { blogPost: IBlogPost }) => {
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
                    <BlogEditor
                        content={blogPost.description}
                        setContent={() => {}}
                    />
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

interface FormData {
    id: string;
    title: string;
    description: string;
    status: IBlogPostStatus;
    content: string;
    preview_image: string | File | undefined;
    cover_image: string | File | undefined;
}

const convertFileToDataURI = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    
export const EditBlogForm = ({ blogPost }: { blogPost: IBlogPost }) => {
    const [form] = Form.useForm<FormData>();
    const [updateBlogPost, { isLoading }] = useUpdateBlogPostMutation();

    const handleFinish = async (values: FormData) => {
        const { preview_image, cover_image, ...rest } = values;
        const body = { ...values, blogPostId: blogPost.id };

        // Check if preview_image is a file and convert to data URI
        if (preview_image instanceof File) {
            body.preview_image = await convertFileToDataURI(preview_image);
        }

        if (cover_image instanceof File) {
            body.cover_image = await convertFileToDataURI(cover_image);
        }

        console.log({ values, form });

        try {
            await updateBlogPost({ ...body, blogPostId: blogPost.id }).unwrap();
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
                form={form as FormInstance}
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
                    initialValue={blogPost.title}
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
                    initialValue={blogPost.blogTags
                        .map((tag) => tag.name.toUpperCase())
                        .join(", ")}
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
                    label="Status"
                    initialValue={blogPost.status}
                    name="status"
                >
                    <Select
                        size="large"
                        value={blogPost.status.toUpperCase()}
                        onChange={(value) =>
                            form.setFieldValue("status", value)
                        }
                    >
                        {Object.values(IBlogPostStatus).map((status) => (
                            <Select.Option key={status} value={status}>
                                {status}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    required
                    initialValue={blogPost.description}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <BlogEditor
                        content={blogPost.description}
                        setContent={(value) => {
                            console.log("setting value", { value });

                            form.setFieldValue("description", value);
                        }}
                    />
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
                    initialValue={blogPost.preview_image}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the preview image",
                        },
                    ]}
                >
                    <UploadMedia
                        id={"preview_image"}
                        initialValue={blogPost.preview_image}
                        setValue={(file) =>
                            form.setFieldValue("preview_image", file)
                        }
                    />
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
                    initialValue={blogPost.cover_image}
                    rules={[
                        {
                            required: true,
                            message: "Please enter the cover image",
                        },
                    ]}
                >
                    <UploadMedia
                        id={"cover_image"}
                        initialValue={blogPost.preview_image}
                        setValue={(file) =>
                            form.setFieldValue("cover_image", file)
                        }
                    />
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

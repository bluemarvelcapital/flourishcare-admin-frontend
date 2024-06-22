import { Button, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { BlogEditor } from "./BlogEditor";
import { UploadMedia } from "./UploadMedia";
import { IBlogPost, IBlogPostStatus } from "@/types/blog";
import { FormInstance, useForm } from "antd/es/form/Form";
import {
    useCreateBlogPostMutation,
    useGetBlogTagsQuery,
    useUpdateBlogPostMutation,
} from "@/services/blog.service";
import { toast } from "react-toastify";
import Util from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { addPosts, setPosts, updatePost } from "@/context/blog.slice";

export const BlogForm = () => {
    const { data: tagsData } = useGetBlogTagsQuery(null);
    const { tags } = useSelector((state: RootState) => state.blog);
    const [blogTags, setBlogTags] = React.useState<IBlogPost["blogTags"]>([]);
    const dispatch = useDispatch();
    const [form] = Form.useForm<FormDataWithFiles>();

    const [createBlogPost, { isLoading }] = useCreateBlogPostMutation();

    useEffect(() => {
        if (tagsData?.data.tags) {
            setBlogTags(tagsData.data.tags);
        }
    }, [tagsData, dispatch]);

    const handleFinish = async (values: FormData) => {
        const { preview_image, cover_image, ...rest } = values;

        // Check if preview_image is a file and convert to data URI
        if (preview_image instanceof File) {
            values.preview_image =
                await Util.convertFileToDataURI(preview_image);
        }

        if (cover_image instanceof File) {
            values.cover_image = await Util.convertFileToDataURI(cover_image);
        }

        try {
            const res = await createBlogPost({
                ...values,
                preview_image: values.preview_image as string,
                cover_image: values.cover_image as string,
                createdAt: new Date().toDateString(),
                tags: values.tags.join(","),
            }).unwrap();
            dispatch(addPosts([res.data.blogPost]));
            toast.success("Blog post created successfully");
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
                <Form.Item label="Category" name="tags">
                    <Select
                        mode="multiple"
                        onChange={(e) => {
                            form.setFieldValue("tags", e);
                        }}
                    >
                        {tags.map((tag) => (
                            <Select.Option key={tag.id} value={tag.id}>
                                {tag.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status">
                    <Select
                        size="large"
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
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <Input.TextArea
                        onChange={(e) => {
                            form.setFieldValue("description", e.target.value);
                        }}
                    ></Input.TextArea>
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <BlogEditor
                        content={""}
                        setContent={(value) => {
                            form.setFieldValue("content", value);
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
                    rules={[
                        {
                            required: true,
                            message: "Please upload a preview image",
                        },
                    ]}
                >
                    <UploadMedia
                        id={"preview_image"}
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
                    rules={[
                        {
                            required: true,
                            message: "Please upload a cover image",
                        },
                    ]}
                >
                    <UploadMedia
                        id={"cover_image"}
                        setValue={(file) =>
                            form.setFieldValue("cover_image", file)
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Create Post
                    </Button>
                </Form.Item>
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
    tags: string[];
}

type FormDataWithFiles = Exclude<FormData, "preview_image" | "cover_image"> & {
    preview_image: File | string;
    cover_image: File | string;
};

export const EditBlogForm = ({ blogPost }: { blogPost: IBlogPost }) => {
    const [form] = Form.useForm<FormData>();
    const [updateBlogPost, { isLoading }] = useUpdateBlogPostMutation();
    const { tags } = useSelector((state: RootState) => state.blog);
    const disptach = useDispatch();

    const handleFinish = async (values: FormData) => {
        const { preview_image, cover_image, ...rest } = values;
        const body = { ...values, blogPostId: blogPost.id };

        // Check if preview_image is a file and convert to data URI
        if (preview_image instanceof File) {
            body.preview_image = await Util.convertFileToDataURI(preview_image);
        }

        if (cover_image instanceof File) {
            body.cover_image = await Util.convertFileToDataURI(cover_image);
        }

        console.log({ values, form });

        try {
            const res = await updateBlogPost({
                ...body,
                blogPostId: blogPost.id,
            }).unwrap();
            disptach(updatePost(res.data.blogPost));
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
                    tags: blogPost.blogTags.map((tag) => tag.id),
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
                <Form.Item label="Category" name="tags">
                    <Select
                        mode="multiple"
                        value={blogPost.blogTags.map((tag) => tag.name)}
                        onChange={(e) => {
                            form.setFieldValue("tags", e);
                        }}
                    >
                        {tags.map((tag) => (
                            <Select.Option key={tag.id} value={tag.id}>
                                {tag.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Status" name="status">
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
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <Input.TextArea
                        value={blogPost.description}
                        onChange={(e) => {
                            form.setFieldValue("description", e.target.value);
                        }}
                    ></Input.TextArea>
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please enter the description",
                        },
                    ]}
                >
                    <BlogEditor
                        content={blogPost.content}
                        setContent={(value) => {
                            form.setFieldValue("content", value);
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
                </Form.Item>{" "}
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
                    <UploadMedia
                        id={"cover_image"}
                        initialValue={blogPost.cover_image}
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

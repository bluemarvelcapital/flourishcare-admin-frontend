import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IBlogPost } from "@/types/blog";
import { fetchBaseQueryWithAuth } from "./customQuery";

interface GetBlogPostsResponse {
    status: "success";
    data: {
        blogPosts: (IBlogPost & { status: "draft" | "published" | "hidden" })[];
    };
}

interface UpdateBlogPostResponse {
    status: "success";
    data: {
        blogPost: IBlogPost & { status: "draft" | "published" | "hidden" };
    };
}

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/blog` }),
    endpoints: (builder) => {
        return {
            getBlogPosts: builder.query<GetBlogPostsResponse, any>({
                query: () => {
                    return {
                        url: "/",
                    };
                },
            }),
            updateBlogPost: builder.mutation<
                UpdateBlogPostResponse,
                Partial<IBlogPost> & {
                    blogPostId: string;
                    preview_image: File | string;
                    cover_image: File | string;
                }
            >({
                query: (body) => {
                    const { preview_image, cover_image, ...rest } = body;
                    const formData = new FormData();

                    // Check if files are passed and add to FormData
                    if (preview_image instanceof File) {
                        formData.append("preview_image", preview_image);
                    }
                    if (cover_image instanceof File) {
                        formData.append("cover_image", cover_image);
                    }

                    // Add the rest of the data
                    Object.keys(rest).forEach((key) => {
                        if (rest[key] !== undefined) {
                            formData.append(key, rest[key] as string | Blob);
                        }
                    });

                    // Determine the request payload
                    const payload =
                        preview_image instanceof File ||
                        cover_image instanceof File
                            ? formData
                            : { ...rest, preview_image, cover_image };

                    return {
                        url: `/${body.blogPostId}`,
                        method: "PATCH",
                        body: payload,
                    };
                },
            }),
            createBlogPost: builder.mutation<
                UpdateBlogPostResponse,
                Omit<IBlogPost, "id">
            >({
                query: (body) => {
                    const { preview_image, cover_image, ...rest } = body;
                    const formData = new FormData();

                    // Check if files are passed and add to FormData
                    if (preview_image instanceof File) {
                        formData.append("preview_image", preview_image);
                    }
                    if (cover_image instanceof File) {
                        formData.append("cover_image", cover_image);
                    }

                    // Add the rest of the data
                    Object.keys(rest).forEach((key) => {
                        if (rest[key] !== undefined) {
                            formData.append(key, rest[key] as string | Blob);
                        }
                    });

                    // Determine the request payload
                    const payload =
                        preview_image instanceof File ||
                        cover_image instanceof File
                            ? formData
                            : { ...rest, preview_image, cover_image };

                    return {
                        url: "/new",
                        method: "POST",
                        body: payload,
                    };
                },
            }),
        };
    },
});

export const {
    useGetBlogPostsQuery,
    useCreateBlogPostMutation,
    useUpdateBlogPostMutation,
} = blogApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_url } from "@/constants/API_URL"
import { BlogI } from "@/types/blog"

interface GetBlogPostsResponse {
    status: 'success',
    data: {
        blogPosts: (BlogI & { status: 'draft' | 'published' | 'hidden' })[]
    }
}

interface UpdateBlogPostResponse {
    status: 'success',
    data: {
        blogPost: BlogI & { status: 'draft' | 'published' | 'hidden' }
    }
}

const mappedKeys = {
    preview_image: 'previewImage',
    cover_image: 'coverImage',
}

export const blogApi = createApi({
    reducerPath: "createApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${api_url}/blog` }),
    endpoints: (builder) => {
        return {
            getBlogPosts: builder.query<GetBlogPostsResponse, any>({
                query: () => {
                    return {
                        url: "/",
                    }
                },
            }),
            updateBlogPost: builder.mutation<UpdateBlogPostResponse, Partial<BlogI> & { blogPostId: string }>({
                query: (body) => {
                    console.log({ body });
                    (body as unknown as Record<string, string>)['preview_image'] = body.preview_image as string;
                    (body as unknown as Record<string, string>)['cover_image'] = body.cover_image as string;
                    return {
                        url: "/",
                        method: "PATCH",
                        body: body,
                    }
                },
            }),
            createBlogPost: builder.mutation<BlogI, Omit<BlogI, 'id'>>({
                query: (body) => {
                    (body as unknown as Record<string, string>)['preview_img'] = body.preview_image as string;
                    (body as unknown as Record<string, string>)['cover_img'] = body.cover_image as string;
                    return {
                        url: "/",
                        method: "POST",
                        body: body,
                    }
                },
            }),
        }
    },
})

export const { useGetBlogPostsQuery, useCreateBlogPostMutation, useUpdateBlogPostMutation } = blogApi

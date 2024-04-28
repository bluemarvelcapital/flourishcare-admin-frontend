import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_url } from "@/constants/API_URL"
import { BlogI } from "@/types/blog"
import { fetchBaseQueryWithAuth } from "./customQuery"

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

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/blog` }),
    endpoints: (builder) => {
        return {
            getBlogPosts: builder.query<GetBlogPostsResponse, any>({
                query: () => {
                    return {
                        url: "/all",
                    }
                },
            }),
            updateBlogPost: builder.mutation<UpdateBlogPostResponse, Partial<BlogI> & { blogPostId: string }>({
                query: (body) => {
                    console.log({ body });
                    (body as unknown as Record<string, string>)['previewImage'] = body.preview_image as string;
                    (body as unknown as Record<string, string>)['coverImage'] = body.cover_image as string;
                    return {
                        url: "/",
                        method: "PATCH",
                        body: body,
                    }
                },
            }),
            createBlogPost: builder.mutation<UpdateBlogPostResponse, Omit<BlogI, 'id'>>({
                query: (body) => {
                    (body as unknown as Record<string, string>)['previewImage'] = body.preview_image as string;
                    (body as unknown as Record<string, string>)['coverImage'] = body.cover_image as string;

                    return {
                        url: "/new",
                        method: "POST",
                        body: body,
                    }
                },
            }),
        }
    },
})

export const { useGetBlogPostsQuery, useCreateBlogPostMutation, useUpdateBlogPostMutation } = blogApi

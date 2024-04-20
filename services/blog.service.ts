import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_url } from "@/constants/API_URL"
import { BlogI } from "@/types/blog"

interface GetBlogPostsResponse {
    status: 'success',
    data: {
        blogPosts: (BlogI & { status: 'draft' | 'published' | 'hidden' })[]
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
            updateBlogPost: builder.mutation<BlogI, Partial<BlogI> & { blogPostId: string }>({
                query: (body) => {
                    // Use formdata if image is added
                    let formData: FormData | undefined
                    if (body.cover_image || body.preview_image) {
                        formData = new FormData()
                        for (const key in body) {
                            const _key = mappedKeys[key as keyof typeof mappedKeys] ?? key
                            formData.append(_key, body[key as keyof typeof body] as string)
                        }
                    }

                    return {
                        url: "/",
                        method: "PATCH",
                        body: formData ?? body,
                    }
                },
            }),
            createBlogPost: builder.mutation<BlogI, Omit<BlogI, 'id'>>({
                query: (body) => {
                    let formData = new FormData()
                    for (const key in body) {
                        const _key = mappedKeys[key as keyof typeof mappedKeys] ?? key
                        formData.append(_key, body[key as keyof typeof body] as string)
                    }

                    return {
                        url: "/",
                        method: "POST",
                        body: formData ?? body,
                    }
                },
            }),
        }
    },
})

export const { useGetBlogPostsQuery, useCreateBlogPostMutation, useUpdateBlogPostMutation } = blogApi

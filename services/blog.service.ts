import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_url } from "@/constants/API_URL"

export const blogApi = createApi({
  reducerPath: "createApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${api_url}/blog` }),
  endpoints: (builder) => {
    return {
      getBlogPosts: builder.query<any, any>({
        query: () => {
          return {
            url: "/",
          }
        },
      }),
    }
  },
})

export const { useGetBlogPostsQuery } = blogApi

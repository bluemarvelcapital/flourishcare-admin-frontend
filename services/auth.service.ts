import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { api_url } from "@/constants/API_URL"
import { IUser } from "@/types/user"

interface SuccessfulLoginResponse {
    status: 'success',
    data: {
        user: IUser,
        accessToken: string,
        refreshToken: string,
    }
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${api_url}/auth` }),
    endpoints: (builder) => {
        return {
            login: builder.mutation<SuccessfulLoginResponse, { email: string, password: string}>({
                query: (body) => ({
                    url: '/login',
                    method: 'POST',
                    body,
                }),
            }),
        }
    },
})

export const { useLoginMutation } = authApi

import { fetchBaseQuery } from "@reduxjs/toolkit/query"

export const fetchBaseQueryWithAuth = ({ baseUrl }: { baseUrl: string }) => fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as any).auth.accessToken
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
    baseUrl: baseUrl,
    
})
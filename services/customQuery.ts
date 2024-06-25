import { RootState } from "@/context/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const fetchBaseQueryWithAuth = ({ baseUrl }: { baseUrl: string }) =>
    fetchBaseQuery({
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState() as RootState).auth.accessToken;
            const token = localStorage.getItem("access");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
        baseUrl: baseUrl,
    });

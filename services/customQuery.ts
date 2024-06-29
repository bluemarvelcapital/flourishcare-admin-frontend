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
        fetchFn: async (...args) => {
            const response = await fetch(...args);
            if (response.status === 401) {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                window.location.href = "/login";
            }
            return response;
        },
    });

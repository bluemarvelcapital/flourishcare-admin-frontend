import { createApi } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IUser } from "@/types/user";
import { fetchBaseQueryWithAuth } from "./customQuery";

interface SuccessfulLoginResponse {
    status: "success";
    data: {
        user: IUser;
        accessToken: string;
        refreshToken: string;
    };
}

interface GetLoggedUserInfoResponse {
    status: "success";
    data: {
        user: IUser;
    };
}

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/auth` }),
    endpoints: (builder) => {
        return {
            login: builder.mutation<
                SuccessfulLoginResponse,
                { email: string; password: string }
            >({
                query: (body) => ({
                    url: "/login",
                    method: "POST",
                    body,
                }),
            }),
            getLoggedUserInfo: builder.query<SuccessfulLoginResponse, any>({
                query: () => ({
                    url: "/user",
                    method: "GET",
                }),
            }),
        };
    },
});

export const { useLoginMutation, useGetLoggedUserInfoQuery } = authApi;

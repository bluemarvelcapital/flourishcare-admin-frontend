import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { fetchBaseQueryWithAuth } from "./customQuery";
import { IUser, IUserWithRelations } from "@/types/user";

interface GetUsersResponse {
    status: "success";
    data: {
        users: IUser[];
    };
}

interface GetUserInfoResponse {
    status: "success";
    data: {
        user: IUserWithRelations;
    };
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/user` }),
    endpoints: (builder) => {
        return {
            getUser: builder.query<GetUserInfoResponse, { userId: string }>({
                query: ({ userId }) => {
                    return {
                        url: "/info",
                        params: {
                            userId,
                        },
                    };
                },
            }),
            getUsers: builder.query<GetUsersResponse, void>({
                query: () => {
                    return {
                        url: "/",
                    };
                },
            }),
        };
    },
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;

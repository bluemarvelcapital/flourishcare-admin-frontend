import { createApi } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IService } from "@/types/services";
import { fetchBaseQueryWithAuth } from "./customQuery";

interface GetServicesResponse {
    status: "success";
    data: {
        services: IService[];
    };
}

interface UpdateServiceResponse {
    status: "success";
    data: {
        service: IService;
    };
}

interface GetServicesResponse {
    status: "success";
    data: {
        services: IService[];
    };
}

interface CreateServiceResponse {
    status: "success";
    data: {
        service: IService;
    };
}

export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/service` }),
    endpoints: (builder) => {
        return {
            getServices: builder.query<GetServicesResponse, void>({
                query: () => {
                    return {
                        url: "/",
                    };
                },
            }),
            createService: builder.mutation<CreateServiceResponse, string>({
                query: (name) => {
                    return {
                        url: "/new",
                        method: "POST",
                        body: { name },
                    };
                },
            }),
            updateService: builder.mutation<
                UpdateServiceResponse,
                { name: string; id: string }
            >({
                query: ({ name, id }) => {
                    return {
                        url: `/`,
                        method: "PATCH",
                        body: { serviceId: id, name },
                    };
                },
            }),
            deleteService: builder.mutation<void, string>({
                query: (id) => {
                    return {
                        url: `/`,
                        method: "DELETE",
                        body: { serviceserviceId: id },
                    };
                },
            }),
        };
    },
});

export const {
    useGetServicesQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;

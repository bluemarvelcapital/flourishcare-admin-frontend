import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_url } from "@/constants/API_URL";
import { IAppointment } from "@/types/appointments";
import { fetchBaseQueryWithAuth } from "./customQuery";
import { GetProp } from "antd";

interface GetAppointmentsResponse {
    status: "success";
    data: {
        appointments: IAppointment[];
    };
}

interface UpdateAppointmentResponse {
    status: "success";
    data: {
        appointments: IAppointment;
    };
}

interface GetAppointmentsResponse {
    status: "success";
    data: {
        appointments: IAppointment[];
    };
}

interface CreateAppointmentResponse {
    status: "success";
    data: {
        appointment: IAppointment;
    };
}

export const appointmentApi = createApi({
    reducerPath: "appointmentApi",
    baseQuery: fetchBaseQueryWithAuth({ baseUrl: `${api_url}/appointment` }),
    endpoints: (builder) => {
        return {
            getAppointments: builder.query<GetAppointmentsResponse, void>({
                query: () => {
                    return {
                        url: "/",
                    };
                },
            }),
            createAppointment: builder.mutation<
                CreateAppointmentResponse,
                string
            >({
                query: (name) => {
                    return {
                        url: "//new",
                        method: "POST",
                        body: { name },
                    };
                },
            }),
            updateAppointment: builder.mutation<
                UpdateAppointmentResponse,
                { name: string; id: string }
            >({
                query: ({ name, id }) => {
                    return {
                        url: `/`,
                        method: "PATCH",
                        body: { Id: id, name },
                    };
                },
            }),
            deleteAppointment: builder.mutation<void, string>({
                query: (id) => {
                    return {
                        url: `/`,
                        method: "DELETE",
                        body: { Id: id },
                    };
                },
            }),
        };
    },
});

export const {
    useGetAppointmentsQuery,
    useCreateAppointmentMutation,
    useUpdateAppointmentMutation,
    useDeleteAppointmentMutation,
} = appointmentApi;

import { IAppointment } from "@/types/appointments";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppointmentState {
    appointments: IAppointment[];
}

const initialState: AppointmentState = {
    appointments: [],
};

export const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        setAppointments: (state, action: PayloadAction<IAppointment[]>) => {
            state.appointments = action.payload;
        },
        addAppointments: (state, action: PayloadAction<IAppointment[]>) => {
            state.appointments = [...state.appointments, ...action.payload];
        },
        updateAppointment: (
            state,
            action: PayloadAction<Partial<IAppointment> & { id: string }>,
        ) => {
            const index = state.appointments.findIndex(
                (post) => post.id === action.payload.id,
            );

            state.appointments[index] = {
                ...state.appointments[index],
                ...action.payload,
            };
        },
        deleteAppointment: (state, action: PayloadAction<string>) => {
            state.appointments = state.appointments.filter(
                (post) => post.id !== action.payload,
            );
        },
    },
});

export const {
    setAppointments,
    addAppointments,
    updateAppointment,
    deleteAppointment,
} = appointmentSlice.actions;

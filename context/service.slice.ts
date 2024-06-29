import { IService } from "@/types/services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
    services: IService[];
}

const initialState: ServiceState = {
    services: [],
};

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        setServices: (state, action: PayloadAction<IService[]>) => {
            state.services = action.payload;
        },
        addServices: (state, action: PayloadAction<IService[]>) => {
            state.services = [...state.services, ...action.payload];
        },
        updateService: (
            state,
            action: PayloadAction<Partial<IService> & { id: string }>,
        ) => {
            const index = state.services.findIndex(
                (post) => post.id === action.payload.id,
            );

            state.services[index] = {
                ...state.services[index],
                ...action.payload,
            };
        },
        deleteService: (state, action: PayloadAction<string>) => {
            state.services = state.services.filter(
                (service) => service.id !== action.payload,
            );
        },
    },
});

export const { setServices, addServices, updateService, deleteService } =
    serviceSlice.actions;

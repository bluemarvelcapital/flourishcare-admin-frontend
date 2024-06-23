import { useAuth } from "@/hooks/useAuth";
import { IUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    user: IUser;
} & (
    | { accessToken: string; refreshToken: string }
    | { accessToken: null; refreshToken: null }
);

const _user = localStorage.getItem("user");
const _access = localStorage.getItem("access");
const _refresh = localStorage.getItem("refresh");

const initialState: AuthState = {
    user: _user ? JSON.parse(_user) : undefined,
    accessToken: _access ? _access : "",
    refreshToken: _refresh ? _refresh : "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{
                user: IUser;
                accessToken: string;
                refreshToken: string;
            }>,
        ) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;

            localStorage.setItem("access", action.payload.accessToken);
            localStorage.setItem("refresh", action.payload.refreshToken);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        clearAuth: (state) => {
            state.user = undefined as any;
            state.accessToken = null as any;
            state.refreshToken = null as any;

            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            localStorage.removeItem("user");
        },
    },
});

export const { setAuth, clearAuth } = authSlice.actions;

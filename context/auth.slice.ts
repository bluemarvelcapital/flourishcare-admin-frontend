import { BlogI } from "@/types/blog"
import { IUser } from "@/types/user"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
    user?: IUser
} & ({ accessToken: string, refreshToken: string } | { accessToken: null, refreshToken: null })

const initialState: AuthState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : undefined,
    accessToken: localStorage.getItem('accessToken') as string,
    refreshToken: localStorage.getItem('refreshToken') as string,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<{ user: IUser, accessToken: string, refreshToken: string }>) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken

            localStorage.setItem('user', JSON.stringify(action.payload.user))
            localStorage.setItem('accessToken', action.payload.accessToken)
            localStorage.setItem('refreshToken', action.payload.refreshToken)
        },
        logOut: (state) => {
            state.user = undefined
            state.accessToken = null as any
            state.refreshToken = null as any

            localStorage.removeItem('user')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        }
    }
})

export const { setAuth, logOut } = authSlice.actions
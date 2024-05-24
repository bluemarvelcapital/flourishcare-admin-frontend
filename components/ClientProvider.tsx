"use client"
import { store } from "@/context/store"
import { ConfigProvider, theme } from "antd"
import React from "react"
import { Provider } from "react-redux"

interface props {
  children: React.ReactNode
}

export const ClientProvider = ({ children }: props) => {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider theme={{ token: { colorPrimary: "#04BD4B" } }}>
          {children}
        </ConfigProvider>
      </Provider>
    </>
  )
}

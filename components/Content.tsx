'use-client'
import React from "react"

export const Content = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:ml-[18%]">{children}</div>
    )
}

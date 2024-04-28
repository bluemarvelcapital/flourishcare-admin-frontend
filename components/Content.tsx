'use client'
import React from "react"
import { useLocalStorage } from "usehooks-ts"

export const Content = ({ children }: { children: React.ReactNode }) => {
    const [localStorage] = useLocalStorage('postsExists', false)

    console.log({ localStorage })
    return (
        <>
            {
                localStorage ? <div className="lg:ml-[18%]">{children}</div> : <div className="lg:ml-[5%]">{children}</div>
            }
        </>
    )
}

'use client'
// import React from "react"
// import { useLocalStorage } from "usehooks-ts"

// export const Content = ({ children }: { children: React.ReactNode }) => {
//     const [localStorage] = useLocalStorage('postsExists', false)

//     console.log({ localStorage })
//     return (
//         <>
// <div className="lg:ml-[18%]">{children}</div>
//             {/* {
//                 localStorage ? <div className="lg:ml-[18%]">{children}</div> : <div className="lg:ml-[5%]">{children}</div>
//             } */}
//         </>
//     )
// }

import React from "react"

interface props {
  children: React.ReactNode
}

export const Content: React.FC<props> = ({ children }) => {
  return <div className="lg:ml-[18%]">{children}</div>
}

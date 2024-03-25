import React from "react"

interface props {
  children: React.ReactNode
}

export const Content: React.FC<props> = ({ children }) => {
  return <div className="lg:ml-[18%]">{children}</div>
}

import React from "react"

interface props {
  children: React.ReactNode
}

export const Content: React.FC<props> = ({ children }) => {
  return <div className="w-[100%]">{children}</div>
}

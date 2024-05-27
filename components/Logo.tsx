import React from "react"
import Link from "next/link"
import { Image } from "antd"

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/flourish.png"
        alt="logo"
        width={178}
        height={65}
        preview={false}
      />
    </Link>
  )
}

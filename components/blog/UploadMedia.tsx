"use client"
import React from "react"
import { IoCloudUploadOutline } from "react-icons/io5"

interface props {
  id: string
}

export const UploadMedia: React.FC<props> = ({ id }) => {
  const [file, setFile] = React.useState<File | null>(null)

  return (
    <div>
      <label
        className="text-sm text-gray-200 w-full border-[#D0D5DD] border-[1px] rounded-md p-5 flex flex-col gap-2 items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
        htmlFor={id}
      >
        <IoCloudUploadOutline className="text-2xl text-secondary" />
        <p>
          <span className="text-secondary">Upload a file</span> click the box.
        </p>
        <p>PNG, JPG, up to 5MB</p>
      </label>
      <input
        style={{ display: "none" }}
        accept=".jpg, .jpeg, .svg, .png, .gif"
        id={id}
        type="file"
        onChange={(e) => setFile(e.target.files![0])}
      />
      <p className="text-secondary">
        <i>{file?.name}</i>
      </p>
    </div>
  )
}

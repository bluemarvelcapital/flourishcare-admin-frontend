"use client"
import React, { useEffect } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"

interface props {
    id: string,
    existingFile?: File | string | null
    setImage?: (image: File) => void
}

export const UploadMedia: React.FC<props> = ({ id, existingFile, setImage }) => {
    const [file, setFile] = React.useState<File | null>(null)
    const [prevFileName, setPrevFileName] = React.useState<string | null>(null)

    useEffect(() => {
        if (existingFile) {
            existingFile instanceof File && setPrevFileName(existingFile.name)


            // If it is a file changed to dataURL
            if (existingFile instanceof File) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    setPrevFileName(e.target?.result as string)
                }
                reader.readAsDataURL(existingFile)
            }


            // If it is a data image in base64
            if (typeof existingFile === "string") {
                // Get the file extension
                const extension = existingFile.split(";")[0].split("/")[1]
                const data = existingFile.split(",")[1]
                const blob = new Blob([data], { type: `image/${extension}` })
                const file = new File([blob], `image.${extension}`)
                setPrevFileName(file.name)
            }
        }

        if (file) {
            setPrevFileName(file.name)
        }
    }, [existingFile, file])
    return (
        <div>
            <label
                className="block text-sm text-gray-200 w-full border-[#D0D5DD] border-[1px] rounded-md p-5 flex flex-col gap-2 items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
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
                onChange={(e) => {
                    setImage && setImage(e.target.files![0]);
                    setFile(e.target.files![0])
                }}
            />
            <p className="text-secondary">
                <i>
                    {prevFileName ?? file?.name}
                </i>
            </p>
        </div>
    )
}

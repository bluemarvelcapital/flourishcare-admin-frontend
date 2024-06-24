import Image from "next/image";
import React, { useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface Props {
    id: string;
    initialValue?: string | null; // Optional prop for existing file or image URL
    setValue?: (file: File) => void; // Optional callback to set the selected file
}

export const UploadMedia: React.FC<Props> = ({
    id,
    initialValue = null,
    setValue,
}) => {
    const [file, setFile] = React.useState<File | null>(null);
    const [preview, setPreview] = React.useState<string | null>(initialValue);

    // Set initial preview if there's an initialValue
    useEffect(() => {
        if (initialValue) {
            setPreview(initialValue);
        }
    }, [initialValue]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);

            // Call setValue if provided
            if (setValue) {
                setValue(selectedFile);
            }
        } else {
            setPreview(null);
        }
    };

    return (
        <div
            className={`flex ${preview ? "flex-row space-between" : "flex-col items-center"} w-full`}
        >
            <div className={`${preview ? "w-1/2" : "w-full"}`}>
                <label
                    className="text-sm text-gray-200 w-full border-[#D0D5DD] border-[1px] rounded-md p-5 flex flex-col gap-2 items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                    htmlFor={id}
                >
                    <IoCloudUploadOutline className="text-2xl text-secondary" />
                    <p>
                        <span className="text-secondary">Upload a file</span>{" "}
                        click the box.
                    </p>
                    <p>PNG, JPG, up to 5MB</p>
                </label>
                <input
                    style={{ display: "none" }}
                    accept=".jpg, .jpeg, .svg, .png, .gif"
                    id={id}
                    type="file"
                    onChange={handleFileChange}
                />
                <p className="text-secondary mt-2">
                    <i>{file?.name}</i>
                </p>
            </div>
            {preview && (
                <div className="w-1/2 mx-2 flex justify-center items-center p-4 bg-gray-100 rounded border shadow-md">
                    <Image
                        src={preview}
                        alt="Selected file preview"
                        className="max-w-full h-auto border rounded"
                        style={{ maxHeight: "150px", maxWidth: "150px" }}
                    />
                </div>
            )}
        </div>
    );
};

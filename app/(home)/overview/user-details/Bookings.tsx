import { Image } from "antd";
import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

const Bookings: React.FC = () => {
    return (
        <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
            <p className="text-xl border-b py-2 border-[#E4E7EC]">Bookings</p>
            <div className="flex py-5 flex-row justify-between">
                <div className="flex flex-row items-center gap-x-3">
                    <Image
                        alt="profile picture"
                        src="/bookings-user-image.svg"
                        width={55}
                        height={55}
                        style={{
                            objectFit: "cover",
                            borderRadius: "8000px",
                        }}
                    />
                    <div className="flex flex-col gap-y-2">
                        <p>Cameron Williams</p>
                        <p className="text-xs">
                            <span className="bg-primary bg-opacity-30 p-1">
                                ID :
                            </span>{" "}
                            Flo-AM334
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="border-[#E4E7EC] rounded-md h-12 w-12 text-slate-400 border p-3 flex items-center justify-center">
                        <FaPhoneAlt />
                    </div>
                    <div className="text-white rounded-md flex h-12 w-12 items-center justify-center bg-secondary p-3">
                        <MdOutlineMessage />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-y-2">
                    <p className="text-[8px]">Service:</p>
                    <p className="text-sm">Flourish Davidson</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-[8px]">Date:</p>
                    <p className="text-sm">May 25, 2023 // 05:4PM</p>
                </div>
            </div>
            <div className="flex py-5 justify-center mt-10 text-black gap-3 text-sm bg-[#F7F7F7] text-center">
                <AiFillFilePdf className="text-error-500" />
                <p>Contract - 00234</p>
                <FiDownload />
            </div>
            <Link
                href="/bookings"
                className="text-secondary text-lg flex justify-center mt-auto hover:text-opacity-80 duration-300 transition-all"
            >
                Update Bookings
            </Link>
        </div>
    );
};

export default Bookings;

"use client";
import { Button, Image, Rate } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LuPencil } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
const UserDetails: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3">
                <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
                    <p className="text-xl border-b border-[#E4E7EC]">
                        Personal Information
                    </p>
                    <div className="flex flex-row justify-between">
                        <Image
                            alt="profile picture"
                            src="/bookings-user-image.svg"
                            width={70}
                            height={70}
                            style={{
                                objectFit: "cover",
                                borderRadius: "8000px",
                            }}
                        />
                        <LuPencil className="text-primary" />
                    </div>
                    <ul className="">
                        <li className="text-[#6a6b6c] text-xs">
                            Full Name :{" "}
                            <span className="text-black text-base">
                                Cameron Williams
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Birthday :{" "}
                            <span className="text-black text-base">
                                24th July 1960
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Gender :{" "}
                            <span className="text-black text-base">Male</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Phone :{" "}
                            <span className="text-black text-base">
                                +(308) 555-0121
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Email :{" "}
                            <span className="text-black text-base">
                                cameron_williams@cv.edu
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Address :{" "}
                            <span className="text-black text-base">
                                2715 Ash Dr. San Jose, South Dakota
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
                    <p className="text-xl border-b border-[#E4E7EC]">
                        Appointments
                    </p>
                    <ul className=" border-y border-[#E4E7Ec]">
                        <li className="text-[#6a6b6c] text-xs">
                            Date :{" "}
                            <span className="text-black text-base">
                                Saturday, June 7th, 2024
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Time :{" "}
                            <span className="text-black text-base">
                                +(308) 555-0121
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Phone :{" "}
                            <span className="text-black text-base">
                                +(308) 555-0121
                            </span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Email :{" "}
                            <span className="text-black text-base">
                                cameron_williams@cv.edu
                            </span>
                        </li>
                    </ul>
                    <div className="text-xl flex flex-row gap-x-10 border-t border-[#E4E7EC]">
                        <button className="text-secondary text-sm hover:text-opacity-75 duration-300 transition-all border-none outline-none">
                            Cancel
                        </button>
                        <Button className="text-red-500" type="link">
                            Update Appointments
                        </Button>
                    </div>
                </div>

                <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
                    <p className="text-xl border-b border-[#E4E7EC]">
                        Bookings
                    </p>
                    <div>
                        <div className="flex flex-row gap-x-3">
                            <Image
                                alt="profile picture"
                                src="/bookings-user-image.svg"
                                width={40}
                                height={40}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "8000px",
                                }}
                            />
                            <div className="flex flex-col gap-y-2">
                                <p>Cameron Williams</p>
                                <p>
                                    <span className="bg-primary bg-opacity-30 p-1">
                                        ID :
                                    </span>{" "}
                                    Flo-AM334
                                </p>
                            </div>
                        </div>
                        <div>
                            <FaPhoneAlt className="border-[#E4E7EC] text-slate-200 border p-3" />
                            <MdOutlineMessage className="text-white bg-secondary p-3" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-y-2">
                            <p className="text-[8px]">Service:</p>
                            <p className="text-lg">Flourish Davidson</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-[8px]">Date:</p>
                            <p className="text-lg">May 25, 2023 // 05:4PM</p>
                        </div>
                    </div>
                    <div className="flex bg-[#F7F7F7] text-center">
                        Contract - 00234
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3">
                <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
                    <p className="border text-xl">Reviews</p>
                    <ul className="flex flex-col gap-y-7">
                        <li className="flex flex-col gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <Rate allowClear={false} defaultValue={4} />
                                    <p>February 3, 2024</p>
                                </div>
                                <RiDeleteBin6Line className="text-error-500" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Rerum molestiae deserunt
                                ipsum? Praesentium quae commodi velit ratione
                                fuga repudiandae illo eligendi itaque ad! Sit
                                aut perferendis dignissimos ipsa, obcaecati
                                possimus!
                            </p>
                        </li>
                        <li className="flex flex-col gap-y-4">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <Rate allowClear={false} defaultValue={4} />
                                    <p>February 3, 2024</p>
                                </div>
                                <RiDeleteBin6Line className="text-error-500" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Rerum molestiae deserunt
                                ipsum? Praesentium quae commodi velit ratione
                                fuga repudiandae illo eligendi itaque ad! Sit
                                aut perferendis dignissimos ipsa, obcaecati
                                possimus!
                            </p>
                        </li>
                    </ul>
                </div>
                <div>
                    <p>Medical Records</p>
                    <ul className="flex flex-col gap-y-7 border-y border-[#E4E7EC py-4">
                        <li className="text-[#6a6b6c] text-xs">
                            Coronary Artery Disease :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Hypertension (High Blood Pressure) :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Congestive Heart Failure :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Pneumonia :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Pulmonary Embolism :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Migraine :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Peptic Ulcer Disease :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                        <li className="text-[#6a6b6c] text-xs">
                            Osteoporosis :{" "}
                            <span className="text-black text-base">NIL</span>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-center">
                        <Button type="link" className="text-secondary">
                            View All Records
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>Transactions</p>
                    <ul className="flex flex-col gap-y-4 border-y border-[#E4E7EC py-4">
                        <div className="flex flex-row justify-between">
                            <p>$4800.00</p>
                            <div className="text-secondary flex flex-col">
                                <GoDotFill />
                                Completed
                            </div>
                        </div>
                        <div>
                            <ul>
                                {" "}
                                <li className="text-[#6a6b6c] text-xs">
                                    Name :{" "}
                                    <span className="text-black text-base">
                                        Flourish Davidson
                                    </span>
                                </li>
                                {" "}
                                <li className="text-[#6a6b6c] text-xs">
                                    Date :{" "}
                                    <span className="text-black text-base">
                                        May 25, 2023 // 05:43PM
                                    </span>
                                </li>
                            </ul>
                            <div></div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;

import Link from "next/link";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const AppointmentDetails: React.FC = () => (
    <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-y-5">
        <p className="text-xl">Appointment Details</p>
        <div className="flex flex-col justify-center gap-y-7">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Full Name</p>
                    <p className="text-xl text-[#555656]">Cameron</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Last Name</p>
                    <p className="text-xl text-[#555656]">Williams</p>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Service</p>
                    <p className="text-xl text-[#555656]">
                        Home care domiciliary
                    </p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Amount</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <FaMoneyCheckDollar className="text-primary" />
                        <p>Williams</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Date</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <FaRegCalendarAlt className="text-primary" />
                        <p>May 25, 2023</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Time</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <IoMdTime className="text-primary" />
                        <p>05:43 PM</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Appointment ID</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <BsPersonCheck className="text-primary" />
                        <p>Flo-AM334</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p className="text-xs text-tertiary">Phone Number</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <MdLocalPhone className="text-primary" />
                        <p>+(308) 555-0121</p>
                    </div>
                </div>
            </div>
        </div>
        <Link className="bg-secondary text-white p-3 max-w-52 mx-auto rounded-md" href="/bookings">
        Booking Details
        </Link>
    </div>
);

export default AppointmentDetails;

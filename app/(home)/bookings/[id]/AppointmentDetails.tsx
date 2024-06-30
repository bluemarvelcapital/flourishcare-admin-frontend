import TruncatedID from "@/components/TruncatedText";
import { UploadMedia } from "@/components/appointments/UploadMedia";
import { IAppointment } from "@/types/appointments";
import { IUser } from "@/types/user";
import Link from "next/link";
import { BsPersonCheck } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

function getTimeFromDateString(date: string) {
    return new Date(date).toLocaleTimeString();
}
const AppointmentDetails: React.FC<{
    appointment: IAppointment;
    user: IUser;
}> = ({ appointment, user }) => (
    <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-y-5">
        <p className="text-xl">Appointment Details</p>
        <div className="flex flex-row space-between w-full">
            <div className="flex flex-col  items-start w-full gap-y-5">
                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">First Name</p>
                    <p className="text-xl text-[#555656]">{user.firstname}</p>
                </div>

                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Service</p>
                    <p className="text-xl text-[#555656]">
                        Home care domiciliary
                    </p>
                </div>

                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Date</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <FaRegCalendarAlt className="text-primary" />
                        <p>{new Date(appointment.date).toDateString()}</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Appointment ID</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <BsPersonCheck className="text-primary" />

                        <div
                            className="bg-primary text-sm whitespace-wrap bg-opacity-20 p-1 text-center"
                            style={{ width: "fit-content" }}
                        >
                            <Link
                                href={`/appointment/${appointment.id}`}
                                className="text-md "
                            >
                                <TruncatedID
                                    text={appointment.id}
                                    maxLength={20}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start w-full gap-y-5">
                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Last Name</p>
                    <p className="text-xl text-[#555656]">
                        {user.lastname ?? "NAN"}
                    </p>
                </div>
                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Reference</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <FaMoneyCheckDollar className="text-primary" />
                        <p>{appointment.reference}</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Time</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <IoMdTime className="text-primary" />
                        <p>{new Date(appointment.date).toLocaleTimeString()}</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <p className="text-xs text-tertiary">Notes</p>
                    <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                        <p>{appointment.note ?? "NAN"}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AppointmentDetails;

import EmptyList from "@/components/EmptyList";
import FileLink from "@/components/FileLink";
import ListITemLink from "@/components/ListItemLink";
import TruncatedText from "@/components/TruncatedText";
import { UserViewDetailPane } from "@/components/UserDetail";
import { IBooking, IBookingWithServices } from "@/types/bookings";
import { IUser } from "@/types/user";
import { Button, Image } from "antd";
import Link from "next/link";
import { AiFillFilePdf } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

interface IBookingProps {
    bookings?: IBookingWithServices[];
    user: IUser;
}
const Bookings: React.FC<IBookingProps> = ({ bookings, user }) => {
    const booking = (bookings ? bookings[bookings.length - 1] : null);
    console.log({ booking });
    return (
        <UserViewDetailPane header={"Bookings"} cta={() => {}}>
            {booking ? (
                <ListITemLink link={`/bookings/${booking.id}`}>
                    <>
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
                                    <p>
                                        {user.firstname + " " + user.lastname}
                                    </p>
                                    <p className="text-xs">
                                        <span className="bg-primary bg-opacity-30 p-1">
                                            ID :
                                        </span>{" "}
                                        {user.id}
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
                        {booking.services.map((service) => (
                            <>
                                <ListITemLink link={`/services/${service.id}`}>
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col gap-y-2">
                                            <p className="text-md">
                                                Service:
                                            </p>
                                            <p className="text-sm">
                                                {service.name}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="text-md">ID:</p>
                                            <TruncatedText text={service.id}/>
                                        </div>
                                    </div>
                                    {booking.contract && (
                                        <FileLink
                                            link={booking.contract}
                                            name="Contract"
                                        />
                                    )}
                                    {booking.carePlan && (
                                        <FileLink
                                            link={booking.carePlan}
                                            name="Care Plan"
                                        />
                                    )}
                                    {booking.personalizedAssessmentReport && (
                                        <FileLink
                                            link={
                                                booking.personalizedAssessmentReport
                                            }
                                            name="Assessment Report"
                                        />
                                    )}
                                </ListITemLink>
                            </>
                        ))}
                    </>
                </ListITemLink>
            ) : (
                <EmptyList title="Bookings" />
            )}
        </UserViewDetailPane>
    );
};

export default Bookings;

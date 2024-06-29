import { IBooking } from "@/types/bookings";
import { Popover } from "antd";
import Link from "next/link";
import { HiOutlineDotsVertical } from "react-icons/hi";

export const BookingView = ({ booking }: { booking: IBooking }) => {
    return (
        <div className="">
            <Popover
                content={
                    <div className="flex flex-col gap-3 w-[100px]">
                        <Link
                            href={`/booking/${booking.id}`}
                            className="cursor-pointer"
                        >
                            View
                        </Link>
                    </div>
                }
                arrow={false}
                trigger={"hover"}
            >
                <HiOutlineDotsVertical className="text-lg cursor-pointer" />
            </Popover>
        </div>
    );
};

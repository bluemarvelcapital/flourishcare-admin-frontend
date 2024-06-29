import Header from "@/components/misc/Header";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineEditCalendar } from "react-icons/md";
import AppointmentDetails from "./AppointmentDetails";
import PersonalInformation from "./PersonalInformation";

const AppointmentOverview: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-12">
            <div className="flex justify-between items-center flex-row">
                <Header
                    header="Bookings"
                    paragraph="Hub for managing all appointments and reservations made by users."
                />
                <div className="flex flex-row items-center gap-x-4 mt-10">
                    <div className="bg-white cursor-pointer border border-tertiary flex flex-row gap-x-2 justify-center p-3 rounded-md text-tertiary items-center text-opacity-50">
                        <MdOutlineEditCalendar className="text-tertiary" />
                        <p>Update Appointment</p>
                    </div>
                    <div className="bg-secondary cursor-pointer flex flex-row gap-x-2 justify-center p-3 rounded-md text-white hover:bg-opacity-70 transition-all duration-300 items-center">
                        <IoIosCheckmarkCircleOutline />
                        <p>Confirm Appointment</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
                <PersonalInformation />
                <AppointmentDetails />
            </div>
        </div>
    );
};

export default AppointmentOverview;

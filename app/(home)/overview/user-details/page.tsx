import PersonalInformation from "./PersonalInformation";
import Appointments from "./Appointments";
import Bookings from "./Bookings";
import MedicalRecords from "./MedicalRecords";
import Transactions from "./Transactions";
import Reviews from "./Reviews";
import Header from "@/components/misc/Header";
const UserDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-10 mb-10">
            <Header
                header="All Users"
                paragraph="Welcome to the Flourish admin dashboard."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                <PersonalInformation />
                <Appointments />
                <Bookings />
                <Reviews />
                <MedicalRecords />
                <Transactions />
            </div>
        </div>
    );
};

export default UserDetails;

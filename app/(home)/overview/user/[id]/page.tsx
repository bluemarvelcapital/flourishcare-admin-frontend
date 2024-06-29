"use client";
import PersonalInformation from "./PersonalInformation";
import Appointments from "./Appointments";
import Bookings from "./Bookings";
import MedicalRecords from "./MedicalRecords";
import Transactions from "./Transactions";
import Reviews from "./Reviews";
import Header from "@/components/misc/Header";
import GoBack from "@/components/GoBack";
import { useParams, useRouter } from "next/navigation";
import { useGetUserQuery } from "@/services/user.service";
import React from "react";
import { IUserWithRelations } from "@/types/user";
import { WindowSpinner } from "@/components/Spinner";
import { toast } from "react-toastify";

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useGetUserQuery({ userId: id ?? "" });
    const [userData, setUserData] = React.useState<IUserWithRelations | null>(
        null,
    );
    const router = useRouter();

    React.useEffect(() => {
        if (data) {
            setUserData(data.data.user);
        }

        if (!isLoading && !data) {
            toast.error("User not found");
            router.back();
        }
    }, [data, isLoading]);

    console.log({ data });
    return (
        <div className="flex flex-col mb-10">
            <GoBack />
            <div className="flex flex-col gap-y-10 mb-10">
                <Header
                    header="User"
                    paragraph="Basic information about the user."
                />
                {userData ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        <PersonalInformation user={userData} />
                        <Appointments appointments={userData.appointments} />
                        <Bookings
                            bookings={userData.bookings}
                            user={userData}
                        />
                        <Reviews />
                        <MedicalRecords />
                        <Transactions
                            transactions={userData.transactions}
                            user={userData}
                        />
                    </div>
                ) : (
                    <WindowSpinner />
                )}
            </div>
        </div>
    );
};

export default UserDetails;

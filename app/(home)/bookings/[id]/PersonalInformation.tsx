"use client";
import { IUser } from "@/types/user";
import { Button, Image } from "antd";
import Link from "next/link";

interface IPersonalInformation {
    user: IUser;
}
const PersonalInformation: React.FC<IPersonalInformation> = ({ user }) => {
    return (
        <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-y-5">
            <p className="text-xl">Personal Information</p>
            <div className="flex flex-row gap-x-9">
                <div className="flex flex-col gap-y-2 mx-5 items-center">
                    <Image
                        alt="profile picture"
                        src="/bookings-user-image.svg"
                        width={155}
                        height={155}
                        style={{
                            objectFit: "cover",
                            borderRadius: "800px",
                            marginBottom: "20px",
                        }}
                    />
                    <Link href={`mailto:${user.email}`}>
                        <Button className="my-3" type="primary">
                            Contact User
                        </Button>
                    </Link>
                </div>
                <ul className="flex flex-col gap-y-4 justify-center">
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Full Name :{" "}
                        <p className="text-black text-xl">
                            {user.firstname + " " + user.lastname}
                        </p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Age :{" "}
                        <p className="text-black text-xl">
                            {user.age ?? "NAN"}
                        </p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Gender :{" "}
                        <p className="text-black text-xl">
                            {user.gender ?? "NAN"}
                        </p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Phone :{" "}
                        <p className="text-black text-xl">
                            {user.phone ?? "NAN"}
                        </p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Email :{" "}
                        <p className="text-black text-xl">{user.email}</p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Address :{" "}
                        <p className="text-black text-xl">
                            {user.address ?? "NAN"}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersonalInformation;

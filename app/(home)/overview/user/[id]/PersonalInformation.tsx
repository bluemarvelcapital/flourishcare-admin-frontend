import { UserViewDetailPane } from "@/components/UserDetail";
import { IUser } from "@/types/user";
import { Image } from "antd";
import { LuPencil } from "react-icons/lu";

interface IPersonalInformationProps {
    user: IUser;
}
const PersonalInformation: React.FC<IPersonalInformationProps> = ({ user }) => {
    console.log("personal", { user });
    return (
        <UserViewDetailPane header={"PersonalInformation"}>
            <div className="flex flex-row justify-between items-center py-4">
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
                <LuPencil className="text-primary cursor-pointer" />
            </div>
            <ul className="flex flex-col gap-y-4 justify-center">
                <li className="text-[#6a6b6c] text-s">
                    ID: <span className="text-black text-base">{user.id}</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Full Name :{" "}
                    <span className="text-black text-base">
                        {user.firstname + " " + user.lastname}
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Age :{" "}
                    <span className="text-black text-base">
                        {user.age ?? "NAN"}
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Gender :{" "}
                    <span className="text-black text-base">
                        {user.gender ?? "NAN"}
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Phone :{" "}
                    <span className="text-black text-base">
                        {user.phone ?? "NAN"}
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Email :{" "}
                    <span className="text-black text-base">{user.email}</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Address :{" "}
                    <span className="text-black text-base">
                        {user.address ?? "NAN"}
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Date Joined :{" "}
                    <span className="text-black text-base">
                        {new Date(user.createdAt).toDateString()}
                    </span>
                </li>
            </ul>
        </UserViewDetailPane>
    );
};

export default PersonalInformation;

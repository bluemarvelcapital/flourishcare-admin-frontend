import { UserViewDetailPane } from "@/components/UserDetail";
import { Image } from "antd";
import { LuPencil } from "react-icons/lu";

const PersonalInformation: React.FC = () => {
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
                <li className="text-[#6a6b6c] text-xs">
                    Full Name :{" "}
                    <span className="text-black text-base">
                        Cameron Williams
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Birthday :{" "}
                    <span className="text-black text-base">24th July 1960</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Gender : <span className="text-black text-base">Male</span>
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
        </UserViewDetailPane>
    );
};

export default PersonalInformation;

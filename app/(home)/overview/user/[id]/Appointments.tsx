import { UserViewDetailPane } from "@/components/UserDetail";
import { Button } from "antd";
import Link from "next/link";
import { PiDivideBold } from "react-icons/pi";

const Appointments: React.FC = () => {
    return (
        <UserViewDetailPane header={"Appointments"} cta={() => {}}>
            <ul className="gap-y-4 h-fit flex flex-col py-5">
                <li className="text-[#6a6b6c] text-xs">
                    Date :{" "}
                    <span className="text-black text-base">
                        Saturday, June 7th, 2024
                    </span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Time :{" "}
                    <span className="text-black text-base">
                        +(308) 555-0121
                    </span>
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
            </ul>
        </UserViewDetailPane>
    );
};

export default Appointments;

import { Button } from "antd";
import Link from "next/link";

const Appointments: React.FC = () => {
    return (
        <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
            <p className="text-xl border-b py-2 border-[#E4E7EC]">
                Appointments
            </p>
            <ul className=" border-y gap-y-4 h-fit flex flex-col py-5 border-[#E4E7Ec]">
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
            <div className="flex justify-center gap-x-5 mt-auto">
                <Button
                    className="text-red-500 hover:text-red-500 hover:text-opacity-80 text-lg"
                    type="link"
                >
                    Cancel
                </Button>
                <Link
                    className="text-secondary text-lg hover:text-opacity-80 duration-300 transition-all"
                    href="/appointments"
                >
                    Update Appointments
                </Link>
            </div>
        </div>
    );
};

export default Appointments;

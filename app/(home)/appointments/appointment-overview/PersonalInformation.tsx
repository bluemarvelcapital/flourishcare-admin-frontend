import { Button, Image } from "antd";

const PersonalInformation: React.FC = () => {
    return (
        <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-y-5">
            <p className="text-xl">Personal Information</p>
            <div className="flex flex-row justify-between gap-x-3">
                <div className="flex flex-col gap-y-2 items-center">
                    <Image
                        alt="profile picture"
                        src="/bookings-user-image.svg"
                        width={55}
                        height={55}
                        style={{
                            objectFit: "cover",
                            borderRadius: "800px",
                            marginBottom: "20px",
                        }}
                    />
                    <Button type="primary">Contact User</Button>
                </div>
                <ul className="flex flex-col gap-y-4 justify-center">
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Full Name :{" "}
                        <p className="text-black text-xl">Cameron Williams</p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Birthday :{" "}
                        <p className="text-black text-xl">24th July 1960</p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Gender : <p className="text-black text-xl">Male</p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Phone :{" "}
                        <p className="text-black text-xl">+(308) 555-0121</p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Email :{" "}
                        <p className="text-black text-xl">
                            cameron_williams@cv.edu
                        </p>
                    </li>
                    <li className="text-[#6a6b6c] text-xs flex flex-col gap-y-2">
                        Address :{" "}
                        <p className="text-black text-xl">
                            2715 Ash Dr. San Jose, South Dakota
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PersonalInformation;

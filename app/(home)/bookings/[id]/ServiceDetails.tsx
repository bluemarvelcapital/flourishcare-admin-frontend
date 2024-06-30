import { IService } from "@/types/services";
import { IoMdTime } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import TruncatedID from "@/components/TruncatedText";
import Link from "next/link";
import { useState } from "react";

const MAX_DESCRIPTION_LENGTH = 100; // Adjust the length as needed
const TruncatedDescription: React.FC<{ description: string }> = ({
    description,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpansion = () => setIsExpanded(!isExpanded);

    if (description.length <= MAX_DESCRIPTION_LENGTH) {
        return <p className="text-xl text-[#555656]">{description}</p>;
    }

    return (
        <div className="text-l text-[#555656]">
            {isExpanded
                ? description
                : `${description.substring(0, MAX_DESCRIPTION_LENGTH)}...`}
            <button onClick={toggleExpansion} className="text-primary ml-2">
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </div>
    );
};

const ServiceDetails: React.FC<{ services: IService[] }> = ({ services }) => (
    <div className="border rounded-md border-[#E4E7EC] p-5 flex flex-col gap-x-2 gap-y-5">
        <p className="text-xl">Service Details</p>
        <div className="overflow-y-auto h-full">
            {services.map((service) => (
                <Link
                    href={`/services/${service.id}`}
                    key={service.id}
                    className="flex flex-row space-between w-full mb-4 p-4 border rounded-md hover:bg-gray-100 hover:cursor-pointer"
                >
                    <div className="flex flex-col items-start w-full gap-y-5">
                        <div className="flex flex-col">
                            <p className="text-xs text-tertiary">
                                Service Name
                            </p>
                            <p className="text-xl text-[#555656]">
                                {service.name}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xs text-tertiary">Description</p>
                            <div className="text-sm text-[#555656]">
                                <TruncatedDescription
                                    description={service.description}
                                />{" "}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xs text-tertiary">Price</p>
                            <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                                <FaMoneyCheckDollar className="text-primary" />
                                <p>
                                    {service.price} {service.currency}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full gap-y-5">
                        <div className="flex flex-col">
                            <p className="text-xs text-tertiary">Duration</p>
                            <div className="text-xl items-center text-[#555656] flex flex-row gap-x-2">
                                <IoMdTime className="text-primary" />
                                <p>{service.duration} minutes</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xs text-tertiary">Status</p>
                            <p className="text-xl text-[#555656]">
                                {service.status}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <p>ID:</p>
                            <div
                                className="bg-primary text-sm whitespace-wrap bg-opacity-20 p-1 text-center"
                                style={{ width: "fit-content" }}
                            >
                                <Link
                                    href={`/services/${service.id}`}
                                    className="text-md"
                                >
                                    <TruncatedID
                                        text={service.id}
                                        maxLength={20}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);

export default ServiceDetails;

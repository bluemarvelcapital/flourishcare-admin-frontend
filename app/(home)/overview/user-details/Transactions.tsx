import { Button } from "antd";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

const Transactions: React.FC = () => {
    return (
        <div className="flex flex-col rounded-md border border-[#E4E7EC] p-5">
            <p className="text-xl py-3">Transactions</p>
            <div className="flex flex-col gap-y-4 border-y border-[#E4E7EC py-4">
                <div className="flex items-center flex-row justify-between">
                    <p className="text-primary text-2xl font-medium">
                        $4800.00
                    </p>
                    <div className="text-secondary text-sm flex items-center flex-row">
                        <BsDot />
                        Completed
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-row justify-between">
                        {" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Name : </p>
                            <p className="text-black text-base">
                                Flourish Davidson
                            </p>
                        </div>{" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Date : </p>
                            <p className="text-black text-base">
                                May 25, 2023 // 05:43PM
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        {" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Service : </p>
                            <p className="text-black text-base">
                                Home care domiciliary
                            </p>
                        </div>{" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Phone : </p>
                            <p className="text-black text-sm">
                                +(308) 555-0121
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-4 border-y border-[#E4E7EC py-4">
                <div className="flex items-center flex-row justify-between">
                    <p className="text-primary text-2xl font-medium">
                        $4800.00
                    </p>
                    <div className="text-secondary flex items-center text-base flex-row">
                        <BsDot />
                        Completed
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <div className="flex flex-row justify-between">
                        {" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Name : </p>
                            <p className="text-black text-base">
                                Flourish Davidson
                            </p>
                        </div>{" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Date : </p>
                            <p className="text-black text-base">
                                May 25, 2023 // 05:43PM
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        {" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Service : </p>
                            <p className="text-black text-base">
                                Home care domiciliary
                            </p>
                        </div>{" "}
                        <div className="text-[#6a6b6c] text-xs">
                            <p>Phone : </p>
                            <p className="text-black text-base">
                                +(308) 555-0121
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                href="/transactions"
                className="text-secondary py-3 text-center hover:text-opacity-80 duration-300 transition-all mt-auto text-lg"
            >
                View All
            </Link>
        </div>
    );
};

export default Transactions;

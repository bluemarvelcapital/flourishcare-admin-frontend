import Image from "next/image";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DataTable: React.FC = () => {
    return (
        <div className="border rounded-md border-[#E4E7EC] flex flex-col gap-y-4 py-5">
            <div className="flex flex-row justify-between items-center p-5">
                <div className="flex flex-col gap-y-4">
                    <p className="font-bold text-xl">Yearly Revenue</p>
                    <p className="text-md text-tertiary">Per Monthly Target</p>
                </div>
                <HiOutlineDotsVertical className="text-lg cursor-pointer" />
            </div>

            <div>
                <Image
                    alt="data table"
                    src="/data-table.svg"
                    width={1000} // specify a default width
                    height={500} // specify a default height
                    layout="responsive"
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default DataTable;

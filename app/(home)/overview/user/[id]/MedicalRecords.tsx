import { UserViewDetailPane } from "@/components/UserDetail";
import { Button } from "antd";

const MedicalRecords: React.FC = () => {
    return (
        <UserViewDetailPane header={"Medical Records"} cta={() => {}}>
            <ul className="flex flex-col gap-y-4 border-y border-[#E4E7EC py-4">
                <li className="text-[#6a6b6c] text-xs">
                    Coronary Artery Disease :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Hypertension (High Blood Pressure) :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Congestive Heart Failure :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Pneumonia :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Pulmonary Embolism :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Migraine : <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Peptic Ulcer Disease :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-xs">
                    Osteoporosis :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
            </ul>
        </UserViewDetailPane>
    );
};

export default MedicalRecords;

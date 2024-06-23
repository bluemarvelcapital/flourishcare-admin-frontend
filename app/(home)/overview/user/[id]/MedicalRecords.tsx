import { UserViewDetailPane } from "@/components/UserDetail";
import { Button } from "antd";

const MedicalRecords: React.FC = () => {
    return (
        <UserViewDetailPane header={"Medical Records"} cta={() => {}}>
            <ul className="flex flex-col gap-y-4 border-y border-[#E4E7EC py-4">
                <li className="text-[#6a6b6c] text-s">
                    Coronary Artery Disease :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Hypertension (High Blood Pressure) :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Congestive Heart Failure :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Pneumonia :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Pulmonary Embolism :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Migraine : <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Peptic Ulcer Disease :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
                <li className="text-[#6a6b6c] text-s">
                    Osteoporosis :{" "}
                    <span className="text-black text-base">NIL</span>
                </li>
            </ul>
        </UserViewDetailPane>
    );
};

export default MedicalRecords;

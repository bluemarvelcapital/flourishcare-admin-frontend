import {Button} from "antd"

const MedicalRecords: React.FC = () => {
    return (
        <div className="rounded-md border flex flex-col border-[#E4E7EC] p-5">
            <p className="text-xl py-3">Medical Records</p>
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
            <div className="flex flex-row justify-center mt-auto">
                <Button type="link" className="text-secondary text-lg">
                    View All Records
                </Button>
            </div>
        </div>
    );
}

export default MedicalRecords

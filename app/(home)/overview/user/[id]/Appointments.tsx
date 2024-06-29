import EmptyList from "@/components/EmptyList";
import ListITemLink from "@/components/ListItemLink";
import TruncatedText from "@/components/TruncatedText";
import { UserViewDetailPane } from "@/components/UserDetail";
import { IAppointment } from "@/types/appointments"; // Assuming you have an IAppointment type defined somewhere

interface IAppointmentProps {
    appointments?: IAppointment[];
}

const Appointments: React.FC<IAppointmentProps> = ({ appointments }) => {
    return (
        <UserViewDetailPane header={"Appointments"} cta={() => {}}>
            {appointments && appointments.length ? (
                <>
                    <ul className="gap-y-4 h-fit flex flex-col py-5">
                        {appointments.slice(0, 3).map((appointment, index) => (
                            <ListITemLink
                                key={index}
                                link={`/appointment/${appointment.id}`}
                            >
                                <li
                                    key={index}
                                    className="text-[#6a6b6c] text-s flex flex-col gap-y-2"
                                >
                                    <div className="flex flex-row justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-bold text-gray-500 ">
                                                Date:
                                            </span>
                                            <span className="text-black text-base">
                                                {new Date(
                                                    appointment.date,
                                                ).toDateString()}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-bold text-gray-500 ">
                                                Time:
                                            </span>
                                            <span className="text-black text-base">
                                                {new Date(
                                                    appointment.date,
                                                ).toLocaleTimeString()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-bold text-gray-500 ">
                                            ID:
                                        </span>
                                        <div
                                            className="bg-primary text-sm whitespace-wrap bg-opacity-20 p-1 text-center"
                                            style={{ width: "fit-content" }}
                                        >
                                            <TruncatedText
                                                text={appointment.id}
                                                maxLength={20}
                                            />
                                        </div>
                                    </div>
                                </li>
                            </ListITemLink>
                        ))}
                    </ul>{" "}
                </>
            ) : (
                <EmptyList title="Appointments" />
            )}
        </UserViewDetailPane>
    );
};

export default Appointments;

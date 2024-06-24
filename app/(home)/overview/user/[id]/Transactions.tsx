import EmptyList from "@/components/EmptyList";
import { UserViewDetailPane } from "@/components/UserDetail";
import { ITransaction, PaymentStatus } from "@/types/transactions";
import { IUser } from "@/types/user";
import { BsDot } from "react-icons/bs";
import TruncatedText from "@/components/TruncatedText";
import ListITemLink from "@/components/ListItemLink";

interface ITransactionProps {
    transactions?: ITransaction[];
    user: IUser;
}

const CURRENCY = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    NGN: "₦",
};

// Function to get the color class based on the transaction status
const getStatusColorClass = (status: ITransaction["status"]) => {
    switch (status) {
        case PaymentStatus.SUCCESSFUL:
            return "text-green-500";
        case PaymentStatus.PENDING:
            return "text-yellow-500";
        case PaymentStatus.FAILED:
            return "text-red-500";
        default:
            return "text-gray-500";
    }
};

const Transactions: React.FC<ITransactionProps> = ({ transactions, user }) => {
    return (
        <UserViewDetailPane header={"Transactions"} cta={() => {}}>
            {transactions && transactions.length ? (
                <>
                    <ul className="gap-y-4 h-fit flex flex-col py-5">
                        {transactions.slice(0, 2).map((transaction, index) => (
                            <ListITemLink
                                link={`/transaction/${transaction.id}`}
                                key={index}
                            >
                                <div
                                    key={index}
                                    className="flex flex-col gap-y-4 py-4"
                                >
                                    <div className="flex items-center flex-row justify-between">
                                        <p className="text-primary text-2xl font-medium">
                                            {(CURRENCY[transaction.currency] ??
                                                CURRENCY.USD) +
                                                transaction.amount}
                                        </p>
                                        <div
                                            className={`text-sm flex items-center flex-row ${getStatusColorClass(transaction.status)}`}
                                        >
                                            <BsDot />
                                            <p>{transaction.status}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-6">
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[#6a6b6c] text-s">
                                                <p>Name : </p>
                                                <p className="text-black text-base">
                                                    {user.firstname +
                                                        " " +
                                                        user.lastname}
                                                </p>
                                            </div>
                                            <div className="text-[#6a6b6c] text-s">
                                                <p>Date : </p>
                                                <p className="text-black text-base">
                                                    {new Date(
                                                        transaction.createdAt,
                                                    ).toDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="text-[#6a6b6c] text-s">
                                                <p>ID : </p>
                                                <TruncatedText
                                                    text={transaction.id}
                                                />
                                            </div>
                                            <div className="text-[#6a6b6c] text-s">
                                                <p>Provider Reference : </p>
                                                <TruncatedText
                                                    text={
                                                        transaction.providerReference
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ListITemLink>
                        ))}
                    </ul>
                </>
            ) : (
                <EmptyList title="Transactions" />
            )}
        </UserViewDetailPane>
    );
};

export default Transactions;

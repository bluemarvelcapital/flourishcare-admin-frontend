import { IUser } from "@/types/user";
import { useLocalStorage } from "usehooks-ts";

export const useAuth = () => {
    const [auth, setAuth] = useLocalStorage<{
        access: string | null;
        refresh: string | null;
        user: IUser | null;
    }>("auth", {
        access: null,
        refresh: null,
        user: null,
    });

    return {
        auth,
        setAuth,
    };
};

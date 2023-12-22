import { createContext, useContext } from "react";
import { User } from "../types/user";

export const AuthActionsContext = createContext<{
    setUser: (user: User) => void;
    logOut: () => Promise<void>;
}>({
    setUser: () => { },
    logOut: async () => { },
});

export function useAuthActions() {
    return useContext(AuthActionsContext);
}
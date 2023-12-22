import { createContext, useContext } from "react";
import { User } from "../types/user";

export const AuthContext = createContext<{
    user: User | null;
    isLoaded: boolean;
}>({
    user: null,
    isLoaded: true,
});

export function useAuth() {
    return useContext(AuthContext);
}
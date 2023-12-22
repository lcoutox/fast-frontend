import { createContext, useContext } from "react";
import { Tokens } from "../types/tokens";

export type TokensInfo = Tokens | null;

export const AuthTokensContext = createContext<{
    tokensInfoRef: React.MutableRefObject<Tokens>;
    setTokensInfo: (tokensInfo: TokensInfo) => void;
}>({
    tokensInfoRef: {
        current: {
            token: null,
            refreshToken: null,
            tokenExpires: null,
        },
    },
    setTokensInfo: () => { },
});

export function useAuthTokens() {
    return useContext(AuthTokensContext);
}
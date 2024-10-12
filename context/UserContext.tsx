"use client"
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import {AUTH_TOKEN_NAME} from "@/utils/constants/constants";
import CreateSession from "@/utils/data/auth/session/createSession";
import DeleteSession from "@/utils/data/auth/session/deleteSession";

interface IUserInterface {
    isLogged: boolean;
    setUserLogged: (token: string) => void;
    unsetUserLogged: () => void;
    getTokenFromCookies: () => string | undefined;
}

export const UserContext = createContext<IUserInterface | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const token = getTokenFromCookies()
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, []);

    const setUserLogged = async (token: string) => {
        const session = await CreateSession()
        if(session) {
            Cookies.set(AUTH_TOKEN_NAME, token, {
                expires: 7,
                path: '/',
                secure: true,
                sameSite: 'none',
            });
            setIsLogged(true);
        }
    };

    const unsetUserLogged = async () => {
        const destroySession = await DeleteSession()
        if(destroySession) {
            Cookies.remove(AUTH_TOKEN_NAME, {
                path: '/',
            });
            setIsLogged(false);
        }
    };

    const getTokenFromCookies = () => {
        return Cookies.get(AUTH_TOKEN_NAME)
    };

    return (
        <UserContext.Provider value={{ isLogged, setUserLogged, unsetUserLogged, getTokenFromCookies }}>
            {children}
        </UserContext.Provider>
    );
};

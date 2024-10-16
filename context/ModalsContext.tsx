"use client";

import {createContext, FC, ReactNode, useEffect, useState} from "react";

interface IModalsInterface {
    modalsState: IStateInterface;
    modalsHandlers: IHandlersInterface;
}

interface IStateInterface {
    isAuthOpen: boolean
    isMenuOpen: boolean
    isCartOpen : boolean
    isCartErrorOpen : boolean
    isWishlistOpen : boolean
    isContactFormOpen : boolean
}

interface IHandlersInterface {
    authHandler: () => void
    menuHandler: () => void
    setMenuOpen: () => void
    cartHandler : (value : boolean) => void
    cartErrorHandler : (value : boolean) => void
    wishlistHandler : () => void
    resetAllStates : () => void
    contactFormHandler : () => void
}

export const ModalsContext = createContext<IModalsInterface | undefined>(undefined);

export const ModalsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const defaultState = {
        isAuthOpen: false,
        isMenuOpen : false,
        isCartOpen : false,
        isCartErrorOpen : false,
        isWishlistOpen : false,
        isContactFormOpen : false
    }
    const [state, setState] = useState<IStateInterface>(defaultState);
    useEffect(() => {
        handlers.resetAllStates()
    }, []);
    useEffect(() => {
        const { isAuthOpen, isMenuOpen, isCartOpen, isWishlistOpen,isContactFormOpen,isCartErrorOpen } = state;
        if (isCartOpen || isAuthOpen || isWishlistOpen || isContactFormOpen || isCartErrorOpen) {
            document.documentElement.classList.add('no-scroll-main');
        } else {
            document.documentElement.classList.remove('no-scroll-main');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll-main');
        };
    }, [state]);
    const handlers: IHandlersInterface = {
        authHandler : () => setState(prevState => ({
            ...prevState,
            isAuthOpen: !prevState.isAuthOpen,
        })),
        menuHandler : () => setState(prevState => ({
            ...prevState,
            isMenuOpen: !prevState.isMenuOpen,
        })),
        setMenuOpen : () => setState(prevState => ({
        ...prevState,
        isMenuOpen:  true
        })),
        cartHandler : (value : boolean) => setState(prevState => ({
            ...prevState,
            isCartOpen: value,
        })),
        cartErrorHandler : (value : boolean) => setState(prevState => ({
            ...prevState,
            isCartErrorOpen: value,
        })),
        contactFormHandler : () => setState(prevState => ({
            ...prevState,
            isContactFormOpen : !prevState.isContactFormOpen,
        })),
        wishlistHandler : () => setState(prevState => ({
            ...prevState,
            isWishlistOpen: !prevState.isWishlistOpen,
        })),
        resetAllStates : () => {
            setState(defaultState)
        }
    };

    return (
        <ModalsContext.Provider value={{ modalsState: state, modalsHandlers : handlers}}>
            {children}
        </ModalsContext.Provider>
    );
};

"use client"
import "../modals.scss"
import {FC, useEffect, useState} from "react";
import StartModal from "@/components/modals/authorization/startModal";
import {useModals} from "@/hooks/ModalsHook";
import RegistrationModal from "@/components/modals/authorization/registrationModal";
import SuccessRegistration from "@/components/modals/authorization/success";
import ErrorAuth from "@/components/modals/authorization/error";
import LoginModal from "@/components/modals/authorization/loginModal";
import ResetPasswordModal from "@/components/modals/authorization/resetPassword";


const AuthorizationModals:FC = () => {
    const { modalsState: { isAuthOpen }, modalsHandlers: { authHandler } } = useModals()
    const [state, setState] = useState({
        isOpen: isAuthOpen,
        isRegistration: false,
        isLogin: false,
        isForgetPassword: false,
        isError: false,
        isSuccess: false,
    })
    const resetState = () => {
        setState({
            isOpen: false,
            isRegistration: false,
            isLogin: false,
            isForgetPassword: false,
            isError: false,
            isSuccess: false,
        })
    };

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            isOpen: isAuthOpen,
        }))
    },[isAuthOpen])
    useEffect(() => {
        checkIfAnyOpenModal()
    }, [state]);

    const checkIfAnyOpenModal = () => {
        const hasTrueState = Object.values(state).some(value => value);
        if (hasTrueState) {
            document.documentElement.classList.add('no-scroll-main');
        } else {
            document.documentElement.classList.remove('no-scroll-main');
        }
    };
    const setActiveState = (activeState: keyof typeof state) => {
        setState(prevState => ({
            ...Object.keys(prevState).reduce((acc, key) => {
                acc[key as keyof typeof state] = key === activeState;
                return acc;
            }, {} as typeof state)
        }));
    };
    const openLoginModal = () => setActiveState('isLogin');
    const openRegistrationModal = () => setActiveState('isRegistration');
    const openForgetPasswordModal = () => setActiveState('isForgetPassword');
    const errorHandler = () => setActiveState('isError');
    const successHandler = () => setActiveState('isSuccess');

    return(
        <>
            {state.isOpen && <StartModal loginHandler={openLoginModal}
                                         registrationHandler={openRegistrationModal}
                                         closeHandler={authHandler}/>}
            <RegistrationModal closeHandler={resetState}
                                isActive={state.isRegistration}
                               errorHandler={errorHandler}
                               successHandler={successHandler}
                                authoriseHandler={openLoginModal}/>
            <LoginModal isActive={state.isLogin}
                        resetPasswordHandler={openForgetPasswordModal}
                        closeHandler={resetState}
                        registerHandler={openRegistrationModal}
                        errorHandler={errorHandler}/>
            <ResetPasswordModal closeHandler={resetState}
                                isActive={state.isForgetPassword}/>
            {/*Results*/}
            {state.isSuccess && <SuccessRegistration closeHandler={resetState}/>}
            {state.isError && <ErrorAuth closeHandler={resetState}
                                         registrationHandler={openRegistrationModal}
                                         loginHandler={openLoginModal}/>}
        </>
    )
}
export default AuthorizationModals
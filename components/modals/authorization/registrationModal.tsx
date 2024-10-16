"use client"
import {FC, useEffect, useState} from "react";
import SocialRegistration from "@/components/modals/authorization/socialRegistration";
import Button from "@/components/ui/button";
import ModalClose from "@/components/icons/modalClose";
import Input from "@/components/ui/input";
import CreateUser from "@/utils/data/auth/createUser";
import {useUser} from "@/hooks/UserHook";
import AnimatedTextButton from "@/components/ui/animatedTextButton";


interface IRegistrationModals {
    isActive : boolean
    closeHandler : () => void
    authoriseHandler : () => void
    successHandler : () => void
    errorHandler : () => void
}
const RegistrationModals:FC<IRegistrationModals> = ({isActive,closeHandler,authoriseHandler,successHandler,errorHandler}) => {
    const {setUserLogged,isLogged} = useUser()
    const errors = {
        login : 'Введите логин',
        password : 'Пароль должен быть минимум 6 символов',
        repeatPassword : 'Пароли должны совпадать'
    }
    const [login,setLogin] = useState<string>('')
    const  [isLoginError,setIsLoginError] = useState<boolean>(false)
    const [password,setPassword] = useState<string>('')
    const  [isPasswordError,setIsPasswordError] = useState<boolean>(false)
    const [repeatPassword,setRepeatPassword] = useState<string>('')
    const  [isRepeatPasswordError,setIsRepeatPasswordError] = useState<boolean>(false)
    const [creating,setCreating] = useState<boolean>(false)
    const [loginErrorText,setLoginErrorText] = useState(errors.login)
    const [isDisabled,setIsDisabled] = useState<boolean>(false)

    useEffect(() => {
        (login.length > 0) && (password.length > 0) && (repeatPassword.length > 0) ?
            setIsDisabled(false) :
            setIsDisabled(true)
    }, [login,password,repeatPassword]);
    useEffect(() => {
        setCreating(false)
    }, [isLogged]);
    const loginHandler = (value : string) => {
        setLogin(value)
    }
    const passwordHandler = (value : string) => {
        setPassword(value)
    }
    const repeatPasswordHandler = (value : string) => {
        setRepeatPassword(value)
    }

    const resetAllErrors = () => {
        setIsLoginError(false)
        setIsPasswordError(false)
        setIsRepeatPasswordError(false)
    }

    const submitHandler = async  () => {
        let error = false
        resetAllErrors()
        if(login.length < 1) {
            setIsLoginError(true)
            error = true
        }
        if(password.length < 6) {
            setIsPasswordError(true)
            error = true
        }
        if(repeatPassword !== password) {
            setIsRepeatPasswordError(true)
            error = true
        }
        if(error  ) {
            return
        }
        const requestData = {
            login: login,
            password: password
        }
        setCreating(true)
        const token = await CreateUser(requestData)
        setCreating(false)
        if(!token) {
            setLoginErrorText('Такой логин уже существует')
            setIsLoginError(true)
            return
        }
        setUserLogged(token)
        successHandler()
    }

    return(
        <div
            className={`modal__login fixed top-0 left-0 right-0 bottom-0 opacity-0 invisible  w-full h-full z-50 bg-[hsla(0,0%,0%,0.443)] duration-200 ${isActive ? ' active' : ''}`}>
            <div className="max-w-[372px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                    <ModalClose clickHandler={closeHandler}/>
                        <div className="text-lg font-medium text-[#333E48] mb-5 text-center">Вітаємо!</div>
                        <form>
                            <Input
                                label={true}
                                labelClass={"text-[#46B1F0] text-lg font-medium mb-2 block"}
                                labelText={"Логін"}
                                inputValue={login}
                                inputClass={`p-[10px] ${isLoginError ? 'mb-2' : 'mb-6'} rounded-3xl w-full bg-[#F6F6F6] duration-200 text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod`}
                                inputHandler={loginHandler}
                                type={"text"}
                                isError={isLoginError}
                                placeholder={"Введіть адресу електронної пошти або логін"}
                                errorText={loginErrorText}/>
                            <Input
                                label={true}
                                labelClass={"text-[#46B1F0] text-lg font-medium mb-2 block"}
                                labelText={"Пароль"}
                                inputValue={password}
                                inputClass={`p-[10px] ${isPasswordError ? 'mb-2' : 'mb-6'} outline-none rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod`}
                                inputHandler={passwordHandler}
                                type={"password"}
                                isError={isPasswordError}
                                placeholder={"Введіть пароль"}
                                errorText={errors.password}/>
                            <Input
                                label={true}
                                labelClass={"text-[#46B1F0] text-lg font-medium mb-2 block"}
                                labelText={"Повторіть пароль"}
                                inputValue={repeatPassword}
                                inputClass={`p-[10px] ${isRepeatPasswordError ? 'mb-2' : 'mb-6'} rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod`}
                                inputHandler={repeatPasswordHandler}
                                type={"password"}
                                isError={isRepeatPasswordError}
                                placeholder={"Введіть пароль"}
                                errorText={errors.repeatPassword}/>
                            <AnimatedTextButton isInProcess={creating}
                                                isDisabled={isDisabled}
                                                clickHandler={submitHandler}
                                                regularText={"Зареєструватись"}
                                                activeText={"Зачекайте..."}/>
                            {/*<Button*/}
                            {/*    classname={`modal_login mx-auto py-[10px] px-5 block rounded-[40px] border-none cursor-pointer text-sm font-medium duration-200 ${isDisabled ? 'bg-[#AEAEAE] text-[#F6F6F6] pointer-events-none' : 'bg-[#46B1F0] text-[#F6F6F6]'}`}*/}
                            {/*    text={"Зареєструватись"}*/}
                            {/*    clickHandler={submitHandler}/>*/}

                        </form>
                        <SocialRegistration/>

                        <div className="mt-2 mb-2 pt-2 pb-2 text-sm font-normal text-[#AEAEAE] text-center">
                            Вже маєте акаунт?
                        </div>
                        <Button classname={"w-max py-[10px] px-[24px] mx-auto block text-sm font-medium text-[#333E48] rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0]"}
                                text={"Увійти"}
                                clickHandler={authoriseHandler}/>

                </div>
            </div>
        </div>
    )
}
export default RegistrationModals
import {FC, useEffect, useState} from "react";
import SocialRegistration from "@/components/modals/authorization/socialRegistration";
import ModalClose from "@/components/icons/modalClose";
import Input from "@/components/ui/input";
import {useUser} from "@/hooks/UserHook";
import Button from "@/components/ui/button";
import CreateToken from "@/utils/data/auth/createToken";
import {useRouter} from "next/navigation";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import {useTranslations} from "next-intl";

interface ILoginModal {
    isActive : boolean
    closeHandler : () => void
    registerHandler : () => void
    errorHandler : () => void
    resetPasswordHandler : () => void
}
const LoginModal:FC<ILoginModal> = ({isActive,closeHandler,registerHandler,errorHandler,resetPasswordHandler}) => {
    const t = useTranslations('AuthorisationText')
    const f = useTranslations('AuthorisationForm')
    const {setUserLogged,isLogged} = useUser()
    const errors = {
        login : f('LoginError'),
        password : f('PasswordError'),
    }

    const [login,setLogin] = useState<string>('')
    const  [isLoginError,setIsLoginError] = useState<boolean>(false)
    const [password,setPassword] = useState<string>('')
    const  [isPasswordError,setIsPasswordError] = useState<boolean>(false)
    const [logging,setLogging] = useState<boolean>(false)
    const [isDisabled,setIsDisabled] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        (login.length > 0) && (password.length > 0) ? setIsDisabled(false) : setIsDisabled(true)
    }, [login,password]);
    useEffect(() => {
        setLogging(false)
    }, [isLogged]);

    const loginHandler = (value : string) => {
        setLogin(value)
    }
    const passwordHandler = (value : string) => {
        setPassword(value)
    }

    const resetAllErrors = () => {
        setIsLoginError(false)
        setIsPasswordError(false)
    }

    const submitHandler = async () => {
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
        if(error) {
            return
        }

        const requestData = {
            username: login,
            password: password
        }
        setLogging(true)
        const token = await CreateToken(requestData)
        setLogging(false)
        if(!token) {
            errorHandler()
            return
        }
        setUserLogged(token)
        closeHandler()
        router.push('/cabinet')
    }
    return(
        <>
            <div className={`modal__sign fixed top-0 left-0 right-0 bottom-0 invisible opacity-0 w-full h-full z-50 bg-[hsla(0,0%,0%,0.443)] duration-200 ${isActive ? 'active' : ''}`}>
                <div className="max-w-[372px] mx-auto mt-8">
                    <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                        <ModalClose clickHandler={closeHandler}/>
                        <div className="text-lg font-medium text-[#333E48] mb-5 text-center">
                            {t('LoginTitle')}
                        </div>
                        <form>
                            <Input
                                label={true}
                                labelClass={"text-[#46B1F0] text-lg font-medium mb-2 block"}
                                labelText={f('LoginLabel')}
                                inputValue={login}
                                inputClass={`p-[10px] ${isLoginError ? 'mb-2' : 'mb-6'} outline-none rounded-3xl w-full bg-[#F6F6F6] duration-200 text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod`}
                                inputHandler={loginHandler}
                                type={"text"}
                                isError={isLoginError}
                                placeholder={f('LoginPlaceholder')}
                                errorText={errors.login}/>
                            <Input
                                label={true}
                                labelClass={"text-[#46B1F0] text-lg font-medium mb-2 block"}
                                labelText={f('PasswordLabel')}
                                inputValue={password}
                                inputClass={`p-[10px] ${isPasswordError ? 'mb-2' : 'mb-6'} outline-none rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod`}
                                inputHandler={passwordHandler}
                                type={"password"}
                                isError={isPasswordError}
                                placeholder={f('PasswordPlaceholder')}
                                errorText={errors.password}/>
                            <AnimatedTextButton isInProcess={logging}
                                                isDisabled={isDisabled}
                                                regularText={t('LoginStaticText')}
                                                clickHandler={submitHandler}
                                                activeText={t('LoginActiveText')}/>
                        </form>
                        <Button classname={"mt-2 block mx-auto max-w-fit mb-2 pt-2 pb-2 text-sm font-normal text-[#AEAEAE] text-center"}
                                text={t('ResetPasswordHelperText')}
                                clickHandler={resetPasswordHandler}/>
                        <SocialRegistration/>
                        <div className="mt-2 mb-2 pt-2 pb-2 text-sm font-normal text-[#AEAEAE] text-center">
                            {t('RegisterHelperText')}
                        </div>
                        <Button classname={"w-max py-[10px] px-[24px] mx-auto block text-sm font-medium text-[#333E48] rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0]"}
                                text={t('RegisterStaticText')}
                                clickHandler={registerHandler}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal
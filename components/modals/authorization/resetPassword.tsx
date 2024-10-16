"use client"
import {FC, useEffect, useState} from "react";
import ModalClose from "@/components/icons/modalClose";
import SocialRegistration from "@/components/modals/authorization/socialRegistration";
import { useForm, SubmitHandler } from "react-hook-form"
import InputError from "@/components/ui/inputError";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import SendResetEmailData from "@/utils/data/resetPassword/sendResetEmailData";
import ExpiredModal from "@/components/modals/general/expiredModal";
import {useTranslations} from "next-intl";
import {useUser} from "@/hooks/UserHook";

interface Props {
    closeHandler : () => void
    isActive : boolean
}
const ResetPasswordModal:FC<Props> = ({closeHandler,isActive}) => {
    const t = useTranslations('AuthorisationText')
    const f = useTranslations('AuthorisationForm')
    const {locale} = useUser()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const [isSending,setIsSending] = useState<boolean>(false)
    const [isDisabled,setIsDisabled] = useState<boolean>(true)
    const [message,setMessage] = useState<null | string>(null)
    useEffect(() => {
        setIsSending(false)
        if(message) {
            closeHandler()
        }
    }, [message]);
    const onFormSubmit:SubmitHandler<{user_email : string}> = async (data) => {
       setIsSending(true)
        const result = await SendResetEmailData(data.user_email,locale)
        if(result) {
            setMessage(result.message)
        }
    }

    return(
        <>
            <div
                className={`modal fixed top-0 left-0 right-0 bottom-0 opacity-0 invisible w-full h-full z-50 bg-[hsla(0,0%,0%,0.443)] duration-200 ${isActive ? 'active' : ''}`}>
                <div className="max-w-[372px] mx-auto mt-8">
                    <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                        <ModalClose clickHandler={closeHandler}/>
                        <div className="text-lg font-medium text-[#333E48] mb-5 text-center">
                            {t('ResetPasswordTitle')}
                        </div>
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <label className="text-[#46B1F0] text-lg font-medium mb-2 block" htmlFor="resetemail">
                                {f('EmailLabel')}
                            </label>
                            <input className={"p-[10px] mb-6 rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   id={"resetemail"}
                                   placeholder={f('EmailPlaceholder')}
                                   type={"email"}
                                   {...register(
                                       'user_email',{
                                           required : f('EmailError'),
                                           pattern : {
                                               value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                               message : f('EmailPatternError')
                                           },
                                           onChange : ( event) => {
                                               if(event.target.value === '') {
                                                   setIsDisabled(true)
                                               } else {
                                                   setIsDisabled(false)
                                               }
                                           }
                                       }
                                   )}
                            />
                            {errors.user_email && (
                                <InputError text={errors.user_email.message}/>
                            )}
                            <AnimatedTextButton isInProcess={isSending}
                                                isDisabled={(isDisabled || !!errors.user_email)}
                                                regularText={t('UpdateStaticText')}
                                                activeText={t('UpdateActiveText')}/>

                        </form>
                        <SocialRegistration/>
                    </div>
                </div>
            </div>
            {message && <ExpiredModal message={message}/>}
        </>
    )
}
export default ResetPasswordModal
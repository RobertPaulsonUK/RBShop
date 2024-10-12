"use client"
import {FC, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import InputError from "@/components/ui/inputError";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import UpdateUserPassword from "@/utils/data/resetPassword/updateUserPasswordData";
import ExpiredModal from "@/components/modals/general/expiredModal";
import {useRouter} from "next/navigation";
import {Simulate} from "react-dom/test-utils";

interface Props {
    login : string
    resetKey : string
}
interface FormData {
    password : string
    repeatPassword : string
}
const ResetPasswordForm:FC<Props> = ({login,resetKey}) => {
    const {register,handleSubmit,formState: { errors },watch,reset} = useForm()
    const [isSending,setIsSending] = useState<boolean>(false)
    const [message,setMessage] = useState<null | string>(null)
    const router = useRouter()
    useEffect(() => {
        reset({
            password : '',
            repeatPassword : ''
        })
    }, [message]);
    const onFormSubmit:SubmitHandler<FormData> = async (data) => {
        setIsSending(true)
        const sendData = {
            login : login,
            key : resetKey,
            password : data.password
        }
        const result = await UpdateUserPassword({requestData : sendData})
        if(result) {
            setMessage(result.message)
            if(result.success) {
                router.push('/')
            }
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className={"max-w-[400px] w-full"}>
                <label className="text-[#46B1F0] text-lg font-medium mb-2 block" htmlFor="resetPassword">
                    Введіть пароль
                </label>
                <input className={"p-[10px] mb-6 rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                       id={"resetPassword"}
                       placeholder={"Введіть пароль"}
                       type={"password"}
                       {...register(
                           'password',{
                               required : 'Пароль має містити не менше 6 символів',
                               minLength : 6
                           }
                       )}
                />
                {errors.password && (
                    <InputError text={errors.password.message}/>
                )}
                <label className="text-[#46B1F0] text-lg font-medium mb-2 block" htmlFor="resetRepeatPassword">
                    Повторіть пароль
                </label>
                <input className={"p-[10px] mb-6 rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                       id={"resetRepeatPassword"}
                       placeholder={"Введіть пароль"}
                       type={"password"}
                       {...register(
                           'repeatPassword',{
                               required : 'Повторіть пароль',
                               validate: value => value === watch('password') || 'Паролі повинні бути однакові'
                           },

                       )}
                />
                {errors.repeatPassword && (
                    <InputError text={errors.repeatPassword.message}/>
                )}
                <AnimatedTextButton isInProcess={isSending}
                                    isDisabled={(!!errors.password || !!errors.repeatPassword)}
                                    regularText={"Оновити"}
                                    activeText={"Оновлюємо"}/>
            </form>
            {message && <ExpiredModal message={message}/>}
        </>
    )
}
export default ResetPasswordForm
"use client"
import {FC, useEffect,useState} from "react";
import {IUserDataInterface} from "@/types/user/user.data.interface";
import { useForm, SubmitHandler } from "react-hook-form"
import InputError from "@/components/ui/inputError";
import UpdateUserData from "@/utils/data/cabinet/updateUserData";
import {useUser} from "@/hooks/UserHook";
import ImageInput from "@/components/cabinet/profile/imageInput";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import ExpiredModal from "@/components/modals/general/expiredModal";

interface Props {
    userData : IUserDataInterface,
    updateHandler : (data : IUserDataInterface) => void
}
export interface InterfaceFormData{
    display_name: string
    first_name: string
    last_name: string
    user_email: string
    billing_phone: string
    billing_address_1 : string
    billing_city : string
    update_avatar?: File
}
const ProfileForm:FC<Props> = ({userData,updateHandler}) => {
    const {getTokenFromCookies} = useUser()
    const [isUpdating,setIsUpdating] = useState<boolean>(false)
    const [message,setMessage] = useState<string | null>(null)

    const {register,reset,handleSubmit, setValue,formState: { errors }} = useForm()
    useEffect(() => {
        reset({
            display_name : userData.displayName,
            first_name : userData.firstName,
            last_name : userData.lastName,
            user_email : userData.userEmail,
            billing_phone : userData.billingPhone,
            billing_city : userData.billingCity,
            billing_address_1 : userData.billingAddress
        })
    }, [userData]);
    useEffect(() => {
        setIsUpdating(false)
    }, [message]);

    const  onFormSubmit:SubmitHandler<InterfaceFormData> = async (data) => {
        setIsUpdating(true)
        const token = getTokenFromCookies()
        if(!token) {
            return
        }
        const result = await UpdateUserData(token,data)
        if(result) {
            updateHandler(result.userData)
            setMessage(result.message)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <ImageInput userAvatar={userData.userAvatar}
                            register={register}
                            setValue={setValue}/>
                <div className="flex mt-4 gap-4 sm:flex-col">
                    <div className="w-full">
                        <label className="text-[#46B1F0] text-lg font-medium mb-2 block">
                            ПІБ
                        </label>
                        <div
                            className="flex flex-col justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Ім’я"}
                                   type={"text"}
                                   {...register(
                                       'first_name',{}
                                   )}
                            />
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Прізвище"}
                                   type={"text"}
                                   {...register(
                                       'last_name',{}
                                   )}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-[#46B1F0] text-lg font-medium mb-2 block">
                            Адреса
                        </label>
                        <div
                            className="flex flex-col justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Місто"}
                                   {...register(
                                       'billing_city',{}
                                   )}
                            />
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Вул., буд., кв."}
                                   {...register(
                                       'billing_address_1',{}
                                   )}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 sm:flex-col">
                    <div className="w-full">
                        <label className="text-[#46B1F0] text-lg font-medium mb-2 block">
                            Нікнейм
                        </label>
                        <div
                            className="flex flex-col justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Введіть Нікнейм користувача"}
                                   type={"text"}
                                   {...register(
                                       'display_name',{}
                                   )}
                            />

                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-[#46B1F0] text-lg font-medium mb-2 block">
                            Email
                        </label>
                        <div
                            className="flex flex-col justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"Введіть адресу електронної пошти"}
                                   type={"email"}
                                   {...register(
                                       'user_email',{
                                           required : 'Введіть адресу електронної пошти',
                                           pattern : {
                                               value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                               message : "Введіть правильну пошту"
                                           }
                                       }
                                   )}
                            />
                            {errors.user_email && (
                                <InputError text={errors.user_email.message}/>
                            )}

                        </div>
                    </div>
                </div>
                <div className="flex gap-4 sm:flex-col">
                    <div className="w-1/2 sm:w-full mb-5">
                        <label className="text-[#46B1F0] text-lg font-medium mb-2 block">
                            Телефон
                        </label>
                        <div
                            className="flex flex-col justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                            <input className={"w-full p-[10px] rounded-3xl bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"}
                                   placeholder={"+380"}
                                   type={"tel"}
                                   {...register(
                                       'billing_phone',{
                                           required: "Введіть номер телефону",
                                           pattern: {
                                               value: /^\+380\d{9}$/,
                                               message: "Введіть правильний номер телефону (+380)"
                                           },
                                           validate: (value) =>
                                               value && /^\d+$/.test(value.replace(/\D/g, '')) || "Допускаються лише цифри",
                                       }
                                   )}
                            />
                            {errors.billing_phone && (
                                <InputError text={errors.billing_phone.message}/>
                            )}

                        </div>
                    </div>
                </div>
                <AnimatedTextButton isInProcess={isUpdating}
                                    isDisabled={!!(errors.billing_phone || errors.user_email)}
                                    regularText={"Зберегти зміни"}
                                    activeText={"Оновлюємо"}/>
            </form>
            {message && <ExpiredModal message={message}/>}
        </>
    )
}
export default ProfileForm
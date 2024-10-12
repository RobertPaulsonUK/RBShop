"use client"
import {FC, useEffect, useState} from "react";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import {SubmitHandler, useForm} from "react-hook-form";
import InputEmail from "@/components/modals/contact-form/form-parts/inputEmail";
import InputName from "@/components/modals/contact-form/form-parts/inputName";
import InputSecondName from "@/components/modals/contact-form/form-parts/inputSecondName";
import TextAreaMessage from "@/components/modals/contact-form/form-parts/textAreaMessage";
import ExpiredModal from "@/components/modals/general/expiredModal";
import SendContactFormData from "@/utils/data/contact-form/contactFormSendData";

export interface ContactFormData {
    name : string
    secondName : string
    email : string
    message? : string
}
const ContactForm:FC<{closeHandler : () => void}> = ({closeHandler}) => {
    const {register,handleSubmit,formState: { errors },watch,reset} = useForm()
    const [isSending,setIsSending] = useState<boolean>(false)
    const [message,setMessage] = useState<null | string>(null)
    useEffect(() => {
        setIsSending(false)
    }, [message]);
    const onFormSubmit:SubmitHandler<ContactFormData> = async (data) => {
        setIsSending(true)
        const result = await SendContactFormData(data.name,data.email,data.secondName,data.message)
        if(result) {
            setMessage(result.message)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label className="text-[#46B1F0] text-lg font-medium mb-2 block">ПІБ</label>
                <div className="flex justify-center items-center gap-[13px] mb-9 sm:flex-col sm:mb-2">
                    <InputName register={register} errors={errors} inputId={"modal-contact-name"}/>
                    <InputSecondName register={register} errors={errors} inputId={'modal-contact-secondname'}/>
                </div>
                <div className={"mb-9 sm:mb-2"}>
                    <label className="text-[#46B1F0] text-lg font-medium mb-2 block"
                           htmlFor={'modal-contact-email'}>
                        Email
                    </label>
                    <InputEmail register={register} errors={errors} inputId={"modal-contact-email"}/>
                </div>
                <label className="text-[#46B1F0] text-lg font-medium mb-2 block" htmlFor="modal-contact-text">
                    Коментар або повідомлення
                </label>
                <TextAreaMessage register={register} inputId={'modal-contact-text'}/>
                <AnimatedTextButton isInProcess={isSending}
                                    isDisabled={!!errors.name || !!errors.secondName || !!errors.email}
                                    regularText={'Надіслати'}
                                    activeText={'Надсилаємо'}/>
            </form>
            {message && <ExpiredModal message={message} clickHandler={closeHandler}/>}
        </>
    )
}
export default ContactForm
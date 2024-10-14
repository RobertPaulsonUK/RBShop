"use client"
import {FC, useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import SendContactFormData from "@/utils/data/contact-form/contactFormSendData";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";
import InputName from "@/components/modals/contact-form/form-parts/inputName";
import InputSecondName from "@/components/modals/contact-form/form-parts/inputSecondName";
import InputEmail from "@/components/modals/contact-form/form-parts/inputEmail";
import TextAreaMessage from "@/components/modals/contact-form/form-parts/textAreaMessage";
import AnimatedTextButton from "@/components/ui/animatedTextButton";
import ExpiredModal from "@/components/modals/general/expiredModal";
import {IContactsData} from "@/types/pages/contact.page.interface";
import ContactsDetails from "@/components/contacts/contactsDetails";
import {useTranslations} from "next-intl";

const ContactPageForm:FC<{pageData : IContactsData}> = ({pageData}) => {
    const {register,handleSubmit,formState: { errors },watch,reset} = useForm()
    const [isSending,setIsSending] = useState<boolean>(false)
    const [message,setMessage] = useState<null | string>(null)
    useEffect(() => {
        setIsSending(false)
        reset({
            name : '',
            secondName : '',
            email : '',
            message : ''
        })
    }, [message]);
    const onFormSubmit:SubmitHandler<ContactFormData> = async (data) => {
        setIsSending(true)
        const result = await SendContactFormData(data.name,data.email,data.secondName,data.message)
        if(result) {
            setMessage(result.message)
        }
    }
    const resetForm = () => {
        setMessage(null)
    }
    const t = useTranslations('ContactsForm')
    return(
        <>
            <form className={"max-w-[800px] mx-auto"}
                  onSubmit={handleSubmit(onFormSubmit)}>
                <div className={"py-6 px-[156px] bg-[#46B1F0] rounded-[48px] mb-[30px] lg:px-[16px]"}>
                    <ContactsDetails data={pageData}/>
                    <label className="text-[#F6F6F6] text-lg font-medium mb-2 block">
                        {t('NameTitle')}
                    </label>
                    <div className="flex justify-center items-start gap-[13px] mb-9 sm:flex-col sm:mb-2">
                        <InputName register={register} errors={errors} inputId={"contact-page-name"}/>
                        <InputSecondName register={register} errors={errors} inputId={'contact-page-secondname'}/>
                    </div>
                    <div className={"mb-9"}>
                        <label className="text-[#F6F6F6] text-lg font-medium mb-2 block" htmlFor="contact-page-email">
                            {t('EmailTitle')}
                        </label>
                        <InputEmail register={register} errors={errors} inputId={"contact-page-email"}/>
                    </div>
                    <label className="text-[#F6F6F6] text-lg font-medium mb-2 block">
                        {t('TextAreaTitle')}
                    </label>
                    <TextAreaMessage register={register} inputId={'modal-contact-text'}/>
                </div>
                <AnimatedTextButton isInProcess={isSending}
                                    isDisabled={!!errors.name || !!errors.secondName || !!errors.email}
                                    staticClass={"w-[400px] mx-auto py-[8px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 sm:w-full"}
                                    regularText={t('FormStaticButtonText')}
                                    activeText={t('FormActiveButtonText')}/>
            </form>
            {message && <ExpiredModal message={message} clickHandler={resetForm}/>}
        </>
    )
}
export default ContactPageForm
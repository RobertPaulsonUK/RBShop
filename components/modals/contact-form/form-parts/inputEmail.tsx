import {FC} from "react";
import InputError from "@/components/ui/inputError";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";
import {useTranslations} from "next-intl";

interface Props {
    register :UseFormRegister<ContactFormData>
    errors : FieldErrors
    inputId : string
}
const InputEmail:FC<Props> = ({register,errors,inputId}) => {
    const t = useTranslations('ContactsForm')
    const e = useTranslations('FormErrors')
    return(
        <>
            <input className="p-[10px] rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"
                   placeholder={t('EmailPlaceholder')}
                   id={inputId}
                   type="email"
                   {...register(
                       'email',{
                           required : e('InputEmailErrorRequired'),
                           pattern : {
                               value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                               message : e('InputEmailErrorPattern')
                           }
                       }
                   )}
            />
            {errors.email && (
                <InputError text={errors.email.message}/>
            )}
        </>
    )
}
export default InputEmail

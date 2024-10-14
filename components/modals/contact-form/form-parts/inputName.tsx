import {FC} from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";
import InputError from "@/components/ui/inputError";
import {useTranslations} from "next-intl";
interface Props {
    register :UseFormRegister<ContactFormData>
    errors : FieldErrors
    inputId : string
}
const InputName:FC<Props> = ({register,errors,inputId}) => {
    const t = useTranslations('ContactsForm')
    const e = useTranslations('FormErrors')
    return(
        <div className={"w-full"}>
            <input className="p-[10px] rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"
                   placeholder={t('NamePlaceholder')}
                   id={inputId}
                   type="text"
                   {...register(
                       'name',{
                           required : e('InputNameError'),
                       }
                   )}
            />
            {errors.name && (
                <InputError text={errors.name.message}/>
            )}
        </div>
    )
}
export default InputName
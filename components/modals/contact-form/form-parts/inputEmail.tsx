import {FC} from "react";
import InputError from "@/components/ui/inputError";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";

interface Props {
    register :UseFormRegister<ContactFormData>
    errors : FieldErrors
    inputId : string
}
const InputEmail:FC<Props> = ({register,errors,inputId}) => {
    return(
        <>
            <input className="p-[10px] rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"
                   placeholder="Введіть адресу електронної пошти"
                   id={inputId}
                   type="email"
                   {...register(
                       'email',{
                           required : 'Введіть адресу електронної пошти',
                           pattern : {
                               value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                               message : "Введіть правильну пошту"
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

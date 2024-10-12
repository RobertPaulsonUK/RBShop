import {FC} from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";
import InputError from "@/components/ui/inputError";
interface Props {
    register :UseFormRegister<ContactFormData>
    errors : FieldErrors
    inputId : string
}
const InputSecondName:FC<Props> = ({register,errors,inputId}) => {
    return(
        <div className={"w-full"}>
            <input className="p-[10px] rounded-3xl w-full bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod"
                   placeholder="Прізвище"
                   id={inputId}
                   type="text"
                   {...register(
                       'secondName',{
                           required : 'Введіть прізвище',
                       }
                   )}
            />
            {errors.secondName && (
                <InputError text={errors.secondName.message}/>
            )}
        </div>
    )
}
export default InputSecondName
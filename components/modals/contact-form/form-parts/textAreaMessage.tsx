import {FC} from "react";
import { UseFormRegister} from "react-hook-form";
import {ContactFormData} from "@/components/modals/contact-form/contactForm";

interface Props {
    register :UseFormRegister<ContactFormData>
    inputId : string
}
const TextAreaMessage:FC<Props> = ({register,inputId}) => {
    return(
        <>
            <textarea
                className="p-[10px] mb-9 rounded-3xl w-full min-h-[133px] bg-[#F6F6F6] duration-200 outline-none text-sm text-[#AEAEAE] font-normal hover:placeholder:text-[#46B1F0] focus:text-black shadow_mod resize-none sm:mb-2"
                name="text"
                id={'modal-contact-text'}
                placeholder="Ваше повідомлення"
                {...register('message',{})}
            >
            </textarea>
        </>
    )
}
export default TextAreaMessage
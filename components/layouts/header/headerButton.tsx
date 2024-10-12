"use client"
import {FC} from "react";
import {useModals} from "@/hooks/ModalsHook";
interface IButtonText {
    buttonText : string
}
const HeaderButton:FC<IButtonText> = ({buttonText}) => {
    const {modalsHandlers:{contactFormHandler}} = useModals()
    return(
        <>
            <button
                onClick={contactFormHandler}
                className="modal_btn py-[10px] px-[8px] text-sm rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0]">{buttonText}</button>
        </>
    )
}
export default HeaderButton
"use client"
import {FC} from "react";
import Image from "next/image";
import {useModals} from "@/hooks/ModalsHook";

const FormInitButton:FC = () => {
    const {modalsHandlers:{contactFormHandler}} = useModals()
    return(
        <>
            <button
                onClick={contactFormHandler}
                className="modal_btn p-[10px] rounded-full bg-[#46B1F0] cursor-pointer border-none w-10 h-10 hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200">
                <Image
                    className={"mx-auto"}
                    src={"/images/message.svg"}
                    width={40}
                    height={40}
                    alt={"message-icon"}/>
            </button>
        </>
    )
}
export default FormInitButton
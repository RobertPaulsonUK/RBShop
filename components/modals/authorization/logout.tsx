"use client"
import {FC, useEffect, useState} from "react";
import ModalClose from "@/components/icons/modalClose";
import Button from "@/components/ui/button";
import {useUser} from "@/hooks/UserHook";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const LogoutModal:FC<{closeModalHandler : () => void}> = ({closeModalHandler}) => {
    const {unsetUserLogged,isLogged} = useUser()
    const [isProcessing,setIsProcessing] = useState<boolean>(false)
    const router = useRouter()
    useEffect(() => {
        setIsProcessing(false)
        if(!isLogged) {
            closeModalHandler()
            router.push('/')
        }
    }, [isLogged]);
    const logoutButtonHandler = () => {
        setIsProcessing(true)
        unsetUserLogged()
    }
    const t = useTranslations('Logout')
    return(
        <div
            className="modal__exit fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[100] bg-[hsla(0,0%,0%,0.443)] duration-200">
            <div className="max-w-[300px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                        <ModalClose clickHandler={closeModalHandler}/>
                        <div className="text-lg font-medium text-[#333E48] mb-2 pb-2 border-b border-solid border-[#46B1F0]">
                            {t('Title')}
                        </div>
                        <Button classname={"w-full py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 sm:w-full mb-2"}
                                text={t('LogoutButtonText')}
                                clickHandler={logoutButtonHandler}/>
                        <Button classname={"w-full py-[10px] px-[18px] text-center mx-auto block text-sm font-medium text-[#333E48] rounded-[48px] border-2 border-solid border-[#46B1F0] transition-all duration-200 hover:text-white hover:bg-[#46B1F0]"}
                                text={t('ContinueButtonText')}
                                clickHandler={closeModalHandler}/>

                </div>
            </div>
        </div>
    )
}
export default LogoutModal
"use client"
import {FC} from "react";
import ModalClose from "@/components/icons/modalClose";
import {useModals} from "@/hooks/ModalsHook";
import {useRouter} from "next/navigation";
import Button from "@/components/ui/button";

const SuccessAddToWishlist:FC = () => {
    const {modalsState: {isWishlistOpen},modalsHandlers:{resetAllStates,wishlistHandler}} = useModals()
    const router = useRouter()
    const toWishlistHandler = () => {
        resetAllStates()
        router.push('cabinet?active=3')
    }
    return(
        <div
            className={`modal__thank fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[hsla(0,0%,0%,0.443)] duration-200 z-[100] ${isWishlistOpen ? '' : 'opacity-0 invisible'}`}>
            <div className="max-w-[300px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-4 pb-4 pt-16 rounded-3xl relative">
                    <ModalClose clickHandler={wishlistHandler}/>
                        <div className="text-lg font-medium text-[#333E48] mb-5">Товар додано в обране</div>
                        <div className="text-sm font-normal text-[#333E48] mb-2 pb-2 border-b border-solid border-[#46B1F0]">
                            Ви можете переглянути список обраних товарів в особистому кабінеті.</div>
                        <Button classname={"mx-auto py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 sm:w-full"}
                                text={"Переглянути обране"}
                                clickHandler={toWishlistHandler}/>
                </div>
            </div>
        </div>
    )
}
export default SuccessAddToWishlist
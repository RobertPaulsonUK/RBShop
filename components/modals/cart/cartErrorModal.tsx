"use client"
import {FC} from "react";
import ModalClose from "@/components/icons/modalClose";
import Button from "@/components/ui/button";
import {useCart} from "@/hooks/CartHook";
import {useModals} from "@/hooks/ModalsHook";
import {useTranslations} from "next-intl";

const CartErrorModal:FC = () => {
    const {cart : {errors}} = useCart()
    const {modalsState : {isCartErrorOpen,isCartOpen},modalsHandlers:{cartErrorHandler,cartHandler}} = useModals()
    const closeModalHandler = () => {
        cartErrorHandler(false)
        if(!isCartOpen) {
            cartHandler(true)
        }
    }
    const t = useTranslations('Cart')
    return(
        <div
            className={`modal__exit fixed top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-[100] bg-[hsla(0,0%,0%,0.443)] duration-200 ${!isCartErrorOpen ? 'hidden' : ''}`}>
            <div className="max-w-[700px] mx-auto mt-8">
                <div className="bg-[#F6F6F6] px-8 pb-8 pt-16 rounded-3xl relative">
                    <ModalClose clickHandler={closeModalHandler}/>

                    {(errors && errors.length > 0) && errors.map((error,index) => (
                        <div key={index} className="text-lg text-center font-medium text-[#333E48] mb-2 pb-2 border-b border-solid border-[#46B1F0]">
                            {error}
                        </div>
                    ))}

                    <Button classname={"relative min-w-[107px] py-[10px]  px-5 rounded-[40px] bg-[#46B1F0] text-white hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center"}
                            text={t('ToCartText')}
                            clickHandler={closeModalHandler}/>
                </div>
            </div>
        </div>
    )
}
export default CartErrorModal
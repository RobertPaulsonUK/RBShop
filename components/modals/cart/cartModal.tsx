"use client"
import {FC} from "react";
import {useModals} from "@/hooks/ModalsHook";
import "../modals.scss"
import ModalClose from "@/components/icons/modalClose";
import {useCart} from "@/hooks/CartHook";
import ToShopButton from "@/components/cart/buttons/toShopButton";
import CheckoutButton from "@/components/cart/buttons/checkoutButton";
import CartItem from "@/components/cart/item/cartItem";
import CartGeneralCount from "@/components/cart/cartGeneralCount";
import Crossell from "@/components/modals/cart/crossell/crossell";
import EmptyCart from "@/components/cart/emptyCart";
const CartModal:FC = () => {
    const {modalsState : {isCartOpen},modalsHandlers : {cartHandler}} = useModals()
    const {cart,currency} = useCart()
    const closeHandler = () => {
        cartHandler(false)
    }
    return(
        <div
            className={`modal fixed top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 invisible z-50 bg-[hsla(0,0%,0%,0.443)] duration-200 ${isCartOpen ? 'active' : ''}`}>
            <div className="max-w-[800px] mx-auto mt-8 lg:max-w-[95%]">
                <div className="bg-[#F6F6F6] py-6 px-10 rounded-3xl relative sm:p-4 max-h-[90vh] overflow-y-auto">
                    <section>
                        <div>
                                <ModalClose clickHandler={closeHandler}/>
                                <div className="text-[32px] leading-[34px] font-semibold text-[#46B1F0] mb-3 sm:mb-5 sm:font-medium">
                                    Кошик
                                </div>
                                {cart.items.length > 0 ? (
                                    <>
                                        <CartGeneralCount count={cart.count} />
                                        <div className={"max-h-[208px] overflow-y-auto"}>
                                            {cart.items.map((cartItem, index) => (
                                                <CartItem key={index} item={cartItem} currency={currency} />
                                            ))}
                                        </div>
                                        <div
                                            className="flex flex-col justify-end gap-4 items-end pb-4 sm:items-center border-b-2 border-[#46B1F0] border-solid">
                                            <div className="flex justify-end items-center gap-8 sm:flex-col-reverse sm:gap-2 sm:w-full">
                                                <CheckoutButton/>
                                                <ToShopButton/>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <EmptyCart />
                                )}
                            </div>
                    </section>
                    {cart.cross_sells.length > 0 && <Crossell items={cart.cross_sells} currency={currency}/>}
                </div>
            </div>
        </div>
    )
}
export default CartModal
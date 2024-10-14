"use client"
import {FC} from "react";
import {useCart} from "@/hooks/CartHook";
import CartGeneralCount from "@/components/cart/cartGeneralCount";
import CartTotal from "@/components/cart/cartTotal";
import EmptyCart from "@/components/cart/emptyCart";
import CartItem from "@/components/cart/item/cartItem";
import CrossellWrapper from "@/components/cart/crossellWrapper";
import {useTranslations} from "next-intl";
import LoadingCart from "@/components/cart/loadingCart";

const Cart:FC = () => {
    const {cart,currency,dataLoading} = useCart()
    const t = useTranslations('Cart')
    return(
        <>
            <section>
                <div className="container">
                    <div className="">
                        <div
                            className="text-[40px] leading-[48px] font-semibold text-[#46B1F0] mb-3 sm:text-[32px] sm:leading-[34px] sm:mb-5 sm:font-medium">
                            {t('Title')}
                        </div>
                        {dataLoading ?
                            <LoadingCart/>
                            :
                            cart.items.length > 0 ?
                                    <>
                                        <CartGeneralCount count={cart.count} className={"text-sm text-[#AEAEAE] font-medium mb-6"}/>
                                        {cart.items.map(
                                            (item,index) => (
                                                <CartItem item={item}
                                                          key={index}
                                                          currency={currency}/>
                                            )
                                        )}
                                        <CartTotal total={cart.total} currency={currency}/>
                                    </>
                                    :
                                    <div className="min-h-[50vh]">
                                        <EmptyCart/>
                                    </div>

                        }
                    </div>
                </div>
            </section>
            {cart.cross_sells.length > 0 &&
            <CrossellWrapper crosselItems={cart.cross_sells} currency={currency}/>
            }
        </>
    )
}
export default Cart
import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";
import CheckoutButton from "@/components/cart/buttons/checkoutButton";

const CartTotal:FC<{total : number,currency : string}> = ({total,currency}) => {
    return(
        <div className="flex flex-col justify-end gap-4 items-end mb-4 sm:items-center">
            <div className="flex items-center justify-end ml-auto mr-0 gap-6">
                <div className="text-[32px] leading-[34px] font-medium text-[#333E48]">Сума</div>
                <div className="text-2xl text-[#333E48] font-bold">{total / 100}<span
                    className="text-[#333E48] text-xs font-bold]">{currency}</span>
                </div>
            </div>
            <div className="flex justify-end items-center gap-8 sm:flex-col sm:gap-2 sm:w-full">
                <ToShopButton/>
                <CheckoutButton/>
            </div>
        </div>
    )
}
export default CartTotal
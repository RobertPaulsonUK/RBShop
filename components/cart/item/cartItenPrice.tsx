"use client"
import {FC} from "react";
import DeleteButton from "@/components/cart/buttons/deleteButton";
import CartItemQty from "@/components/cart/item/cartItemQty";
import {useCart} from "@/hooks/CartHook";

interface ICartItemPrice {
    price : string
    quantity : {
        value : number
    }
    item_key : string
    currency : string
    stockQuantity : number | null
}
const CartItemPrice:FC<ICartItemPrice>  = ({price,quantity,item_key,currency,stockQuantity}) => {

    const {updateCartItemHandler,removeFromCartHandler} = useCart()
    return(
        <div className="flex flex-col items-end relative">
            <div className="text-[#333E48] text-2xl font-bold mb-2 sm:mb-1">{price / 100}<span
                className="text-xs">{currency}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <DeleteButton deleteHandler={removeFromCartHandler} itemKey={item_key}/>
                <CartItemQty currentQty={quantity.value}
                             cartKey={item_key}
                             stockQuantity={stockQuantity}
                             removeHandler={removeFromCartHandler}
                             updateHandler={updateCartItemHandler}/>
            </div>
        </div>
    )
}
export default CartItemPrice


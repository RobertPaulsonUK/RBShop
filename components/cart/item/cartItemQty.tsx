"use client"
import {FC, useEffect, useState} from "react";
import Plus from "@/components/cart/buttons/plus";
import Minus from "@/components/cart/buttons/minus";

interface ICartItemQty {
    updateHandler : (key : string,qty : number) => void
    removeHandler : (key : string) => void
    currentQty : number
    cartKey : string
    stockQuantity : number | null
}
const CartItemQty:FC<ICartItemQty> = ({updateHandler,currentQty,cartKey,removeHandler,stockQuantity}) => {
    const [isPlusDisabled,setIsPlusDisabled] = useState(false)
    const [isUpdating,setIsUpdating] = useState(false)
    useEffect(() => {
        setIsPlusDisabled(currentQty === stockQuantity)
        setIsUpdating(false)
    }, [currentQty,cartKey]);

    const plusHandler = () => {
        setIsUpdating(true)
        updateHandler(cartKey,currentQty + 1)
    }
    const minusHandler = () => {
        let newQty = currentQty - 1
        setIsUpdating(true)
        if(newQty > 0) {
            updateHandler(cartKey,newQty)
        } else {
            removeHandler(cartKey)
        }
    }
    return(
        <div
            className={`flex justify-between rounded-2xl border-[#46B1F0] border border-solid px-2 gap-2 min-w-[70px] relative ${isUpdating ? 'is-updating' : ''}`}>
            <Minus clickHandler={minusHandler}/>
            <div className="text-[14px]">{currentQty}</div>
            <Plus clickHandler={plusHandler} isDisabled={isPlusDisabled}/>
        </div>
    )
}
export default CartItemQty
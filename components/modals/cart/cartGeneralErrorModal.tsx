"use client"
import {FC} from "react";
import {useCart} from "@/hooks/CartHook";
import ExpiredModal from "@/components/modals/general/expiredModal";

const CartGeneralErrorModal:FC = () => {
    const {generalError,updateGeneralError} = useCart()
    const closeHandler = () => {
        updateGeneralError(null)
    }
    return(
        <>
            {generalError && <ExpiredModal message={generalError}
                                           clickHandler={closeHandler}/> }
        </>
    )
}
export default CartGeneralErrorModal
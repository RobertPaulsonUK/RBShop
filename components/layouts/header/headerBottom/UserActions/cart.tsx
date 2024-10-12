"use client"
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import CartIcon from "@/components/icons/cartIcon";
import {useCart} from "@/hooks/CartHook";
import ActiveQty from "@/components/layouts/header/headerBottom/UserActions/activeQty";

const Cart:FC = () => {
    const {cart: {count}} = useCart()
    const [isActive,setIsActive] = useState(false)

    useEffect(() => {
        setIsActiveCart()
    }, [count]);
    const setIsActiveCart = () => {
        count > 0 ? setIsActive(true) : setIsActive(false)
    }
    return(
        <>
            <Link className={"relative"} href={"/cart"}>
                {isActive && <ActiveQty qty={count}/>}
                <CartIcon isActive={isActive}/>
            </Link>
        </>
    )
}

export default Cart
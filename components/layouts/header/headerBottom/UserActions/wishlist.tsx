"use client"
import {FC, useEffect, useState} from "react";
import Link from "next/link";
import WishlistIcon from "@/components/icons/wishlistIcon";
import {useUser} from "@/hooks/UserHook";
import {useWishlist} from "@/hooks/WishlistHook";
import ActiveQty from "@/components/layouts/header/headerBottom/UserActions/activeQty";

const Wishlist:FC = () => {
    const {isLogged} = useUser()
    const {count} = useWishlist()
    const [isActive,setIsActive] = useState(false)
    useEffect(() => {
        setActiveWishlist()
    }, [count]);
    const setActiveWishlist = () => {
        isLogged && count > 0 ? setIsActive(true) : setIsActive(false)
    }

    return(
        <>
            <Link
                className={"relative"} href={"/wishlist"}>
                {isActive && <ActiveQty qty={count}/>}
                <WishlistIcon isActive={isActive}/>
            </Link>
        </>
    )
}

export default Wishlist
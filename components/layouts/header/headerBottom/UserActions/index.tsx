import {FC} from "react";
import Wishlist from "@/components/layouts/header/headerBottom/UserActions/wishlist";
import Cart from "@/components/layouts/header/headerBottom/UserActions/cart";
import Profile from "@/components/layouts/header/headerBottom/UserActions/profile";

const UserActions:FC<{showDefault : boolean}> = ({showDefault}) => {
    const desktopClasses = 'flex justify-center items-center gap-3 md:hidden'
    const mobileClasses = 'justify-center items-center gap-3 md:flex hidden'
    return(
        <>
            <div className={showDefault ? desktopClasses : mobileClasses}>
                <Wishlist/>
                <Cart/>
                <Profile/>
            </div>
        </>
    )
}
export default UserActions
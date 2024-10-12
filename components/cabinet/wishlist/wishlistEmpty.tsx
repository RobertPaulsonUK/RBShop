import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";

const WishlistEmpty:FC = () => {
    return(
        <div className={"w-full flex flex-col items-center justify-center"}>
            <div className={"text-[#333E48] text-lg mb-10 sm:text-center sm:mb-6"}>
                Ваш список бажань порожній
            </div>
            <ToShopButton/>
        </div>
    )
}
export default WishlistEmpty
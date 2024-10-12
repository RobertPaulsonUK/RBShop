import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";

const EmptyCart:FC = () => {
    return(
        <>
            <div className={"text-[#333E48] text-lg mb-10 sm:text-center sm:mb-6"}>
                <p>У Вашому кошику порожньо</p>
            </div>
            <ToShopButton/>
        </>
    )
}
export default EmptyCart
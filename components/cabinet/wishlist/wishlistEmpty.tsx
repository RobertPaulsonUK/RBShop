import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";
import {useTranslations} from "next-intl";

const WishlistEmpty:FC = () => {
    const t = useTranslations('EmptyMessages')
    return(
        <div className={"w-full flex flex-col items-center justify-center"}>
            <div className={"text-[#333E48] text-lg mb-10 sm:text-center sm:mb-6"}>
                {t('EmptyWishlist')}
            </div>
            <ToShopButton/>
        </div>
    )
}
export default WishlistEmpty
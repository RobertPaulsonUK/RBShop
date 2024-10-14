import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";
import {useTranslations} from "next-intl";

const LoadingCart:FC = () => {
    const t = useTranslations('Cart')
    return(
        <div className={"min-h-[50vh]"}>
            <div className={"text-[#333E48] text-lg mb-10 sm:text-center sm:mb-6"}>
                <p>{t('LoadingText')}</p>
            </div>
        </div>
    )
}
export default LoadingCart
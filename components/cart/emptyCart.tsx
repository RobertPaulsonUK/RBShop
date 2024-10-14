import {FC} from "react";
import ToShopButton from "@/components/cart/buttons/toShopButton";
import {useTranslations} from "next-intl";

const EmptyCart:FC = () => {
    const t = useTranslations('EmptyMessages')
    return(
        <>
            <div className={"text-[#333E48] text-lg mb-10 sm:text-center sm:mb-6"}>
                <p>{t('EmptyCart')}</p>
            </div>
            <ToShopButton/>
        </>
    )
}
export default EmptyCart
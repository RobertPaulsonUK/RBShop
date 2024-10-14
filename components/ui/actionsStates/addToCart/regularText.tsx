import {FC} from "react";
import {useTranslations} from "next-intl";

const RegularAddToCartText:FC = () => {
    const t = useTranslations('Product')
    return(
        <>
            {t('BuyStaticText')}
            <span
                className="block content-[''] bg-[url('/images/buy.svg')] bg-no-repeat bg-cover w-5 h-5 ">
            </span>
        </>
    )
}
export default RegularAddToCartText
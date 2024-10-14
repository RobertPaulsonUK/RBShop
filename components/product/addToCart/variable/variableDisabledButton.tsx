import {FC} from "react";
import {useTranslations} from "next-intl";

const VariableDisabledButton:FC = () => {
    const t = useTranslations('Product')
    return(
        <button
        className={"goods__item-details-btn relative min-w-[107px] py-[10px]  px-5 rounded-[40px] hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center bg-[#AEAEAE] text-[#F6F6F6] pointer-events-none "}>
            {t('BuyStaticText')}
            <span
                className="block content-[''] bg-[url('/images/buy.svg')] bg-no-repeat bg-cover w-5 h-5 ">
                            </span>
        </button>
    )
}
export default VariableDisabledButton
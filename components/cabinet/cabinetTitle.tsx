import {FC} from "react";
import {useTranslations} from "next-intl";

const CabinetTitle:FC = () => {
    const t = useTranslations('Cabinet')
    return(
        <>
            <h1
                className="text-[#46B1F0] text-[40px] leading-[48px] font-semibold mb-[40px] sm:text-[32px] sm:leading-[34px] sm:mb-6">
                {t('Title')}
            </h1>
        </>
    )
}
export default CabinetTitle
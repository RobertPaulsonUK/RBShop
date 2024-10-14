import {FC} from "react";
import {useTranslations} from "next-intl";

const VariationEmptyView:FC = () => {
    const t = useTranslations('EmptyMessages')
    return(
        <div className={"min-h-[150px] mb-[20px] flex justify-center items-center text-xl text-[#333E48] font-semibold"}>
            <p>
                {t('Variations')}
            </p>
        </div>
    )
}
export default VariationEmptyView
import {FC} from "react";
import {useTranslations} from "next-intl";

const CartGeneralCount:FC<{count : number,className? : string}> = ({count,className}) => {
    const t = useTranslations('Cart')
    return(
        <div className={className ? className : 'text-sm text-[#AEAEAE] font-medium mb-6 sm:mb-3'}>
            {count} {count > 1 ? t('ProductsMultiCount') : t('ProductsSingularCount')}
        </div>
    )
}
export default CartGeneralCount
import {FC} from "react";
import {useTranslations} from "next-intl";
interface INewArrival {
    className? : string
}
const NewArrival:FC<INewArrival> = ({className}) => {
    const t = useTranslations('Product')
    return(
        <>
            <div className={`${className ?? ''} absolute top-0 right-0 py-2 px-10 bg-[#005BA9] rounded-bl-[20px] rounded-tr-[20px] text-sm font-normal text-[#F6F6F6] shadow_mod sm:px-4`}>
                {t('NewArrival')}
            </div>
        </>
    )
}
export default NewArrival
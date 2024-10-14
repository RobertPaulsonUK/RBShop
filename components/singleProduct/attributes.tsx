import {FC} from "react";
import {IProductAttribute} from "@/types/products/product.full.interface";
import {useTranslations} from "next-intl";

const SingleAttributes:FC<{attributes : IProductAttribute[]}> = ({attributes}) => {
    const t = useTranslations('Product')
    return(
        <>
            <div className="text-[#333E48] text-lg font-medium mb-4">
                {t('AttributesTitle')}
            </div>
            {attributes.length > 0 && attributes.map(
                ({name,options},index) => (
                    <div key={index}
                        className="text-[#AEAEAE] text-sm font-medium mb-1">{name}: <span
                        className="text-[#333E48]">
                        {options.join(', ')}
                    </span>
                    </div>
                )
            )}
        </>
    )
}
export default SingleAttributes
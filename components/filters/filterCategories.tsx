import {FC} from "react";
import {IFilterCategory} from "@/types/filters/filters.interface";
import FilterCategory from "@/components/filters/parts/filterCategory";
import {useTranslations} from "next-intl";

const FilterCategories:FC<{items : IFilterCategory[]}> = ({items}) => {
    const t = useTranslations('Filters')
    return(
        <>
            <div className="mb-[50px] md:mb-5">
                <div
                    className="text-[#46B1F0] text-xl font-medium border-b border-solid border-[#46B1F0] w-full">
                    {t('CategoryTitle')}
                </div>

                <ul className="px-2 max-w-[200px]">
                    {items.map((item) => (
                        <FilterCategory key={item.id} category={item}/>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default FilterCategories
import {FC} from "react";
import ArrowRight from "@/components/icons/arrowRight";
import {IFilterCategory} from "@/types/filters/filters.interface";
import Link from "next/link";

const FilterCategory:FC<{category : IFilterCategory}> = ({category}) => {
    return(
        <>
            <li
                className="flex justify-between items-center gap-[10px] py-4 border-t border-b border-transparent cursor-pointer hover:border-t hover:border-b hover:border-[#46B1F0] duration-200 group md:py-2">
                <Link
                    className="text-base text-[#AEAEAE] duration-200 group-hover:text-[#46B1F0] !md:order-2 md:text-left max-w-[140px]"
                    href={category.url}>
                    {category.name}
                </Link>
                <ArrowRight/>
            </li>
        </>
    )
}
export default FilterCategory
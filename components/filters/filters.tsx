"use client"
import {FC,useState} from "react";
import {IFilterAttribute, IFilterCategory, IFilterPrices} from "@/types/filters/filters.interface";
import FilterInitBtn from "@/components/filters/filterInitBtn";
import FilterCategories from "@/components/filters/filterCategories";
import FilterForm from "@/components/filters/filterForm";

interface IInterface {
    attributes : IFilterAttribute[]
    prices : IFilterPrices
    categories? : IFilterCategory[]
    searchParams : URLSearchParams
}
const Filters:FC<IInterface> = ({attributes,prices,categories,searchParams}) => {
    const [isOpen,setIsOpen] = useState(false)
    const buttonHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <FilterInitBtn clickHandler={buttonHandler}/>
            <div
                className={`sidebar mt-4 md:opacity-0 md:invisible md:duration-200 md:h-[460px] md:overflow-scroll md:absolute md:top-7 md:-left-4 md:z-30 md:bg-[#F6F6F6] md:py-2 md:px-4 md:shadow_mod ${isOpen ? ' active' : ''}`}>
                {categories && <FilterCategories items={categories}/>}
                <FilterForm attributes={attributes} searchParams={searchParams} prices={prices ?? null}/>
            </div>
        </>
    )
}
export default Filters
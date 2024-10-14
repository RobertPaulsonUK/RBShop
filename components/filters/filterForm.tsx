import {FC} from "react";
import {IFilterAttribute, IFilterPrices} from "@/types/filters/filters.interface";
import FilterAttribute from "@/components/filters/parts/filterAttribute";
import FilterFormButton from "@/components/filters/filterFormButton";
import FilterPrices from "@/components/filters/filterPrices";

interface IInterface {
    attributes : IFilterAttribute[]
    prices? : IFilterPrices
    searchParams : URLSearchParams
}
const FilterForm:FC<IInterface> = ({attributes,prices,searchParams}) => {
    return(
        <>
            <form method={"GET"}>
                {prices && <FilterPrices prices={prices} searchParams={searchParams}/>}
                {(attributes && attributes.length > 0) && attributes.map(
                    (attr) => (
                        <FilterAttribute key={attr.slug} attribute={attr} searchParams={searchParams}/>
                    )
                )}
                <FilterFormButton/>
            </form>
        </>
    )
}
export default FilterForm
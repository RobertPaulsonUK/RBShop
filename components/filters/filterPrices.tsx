"use client"
import {FC, useState,useEffect} from "react";
import {IFilterPrices} from "@/types/filters/filters.interface";

const FilterPrices:FC<{prices : IFilterPrices,searchParams : URLSearchParams}> = ({prices,searchParams}) => {

    const searchParamsObj = new URLSearchParams(searchParams);
    const [minPrice, setMinPrice] = useState(prices.minPrice);
    const [maxPrice, setMaxPrice] = useState(prices.maxPrice);

    useEffect(() => {
        const searchParamsObj = new URLSearchParams(searchParams);
        const min = searchParamsObj.get('price[min]');
        const max = searchParamsObj.get('price[max]');

        setMinPrice(min ? Number(min) : prices.minPrice);
        setMaxPrice(max ? Number(max) : prices.maxPrice);
    }, [searchParams]);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        if(value >= maxPrice)  {
            return
        }
        if (/^\d*$/.test(value)) {
            setMinPrice(Number(value))
        }
    }

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        if(value <= minPrice)  {
            return
        }
        if (/^\d*$/.test(value)) {
            setMaxPrice(Number(value))
        }
    }

    return(
        <div className="mb-[50px] md:mb-5">
            <div className="text-[#46B1F0] text-lg font-medium mb-3">Ціна</div>
            <div className="range-slider">
                <span className="range-min-wrapper">
                    <input onChange={handleMinPriceChange}
                           className="range-min"
                           type="range"
                           min={prices.minPrice}
                           max={prices.maxPrice}
                           value={minPrice}>

                    </input>
                </span>
                <span className="range-max-wrapper">
                    <input onChange={handleMaxPriceChange}
                           className="range-max"
                           type="range"
                           min={prices.minPrice}
                           max={prices.maxPrice}
                           value={maxPrice}>

                    </input>
                </span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-3">
                <div className="flex items-center justify-start gap-4">
                    <div className="text-sm font-medium text-[#333E48]">Від</div>
                    <input
                        className="p-3 rounded-lg bg-[#F6F6F6] border border-solid boreder-[#AEAEAE] shadow_mod text-sm w-[58px]"
                        type="text"
                        value={minPrice}
                        name={"price[min]"}
                        onChange={handleMinPriceChange}>
                    </input>
                </div>
                <div className="flex items-center justify-start gap-4">
                    <div className="text-sm font-medium text-[#333E48]">до</div>
                    <input
                        className="p-3 rounded-lg bg-[#F6F6F6] border border-solid boreder-[#AEAEAE] shadow_mod text-sm w-[58px]"
                        type="text"
                        value={maxPrice}
                        name={"price[max]"}
                        onChange={handleMaxPriceChange}>

                    </input>
                </div>
            </div>
        </div>
    )
}
export default FilterPrices
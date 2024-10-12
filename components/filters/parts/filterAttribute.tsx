import {FC} from "react";
import {IFilterAttribute} from "@/types/filters/filters.interface";
import {object} from "prop-types";

const FilterAttribute:FC<{attribute : IFilterAttribute,searchParams? : URLSearchParams}> = ({attribute,searchParams}) => {
    const options = Object.entries(attribute.options);
    const formattedParams = Object.entries(searchParams).reduce((acc, [key, value]) => {
        acc[key] = Array.isArray(value) ? value : [value];
        return acc;
    }, {});
    return(
        <>
            <div className="mb-[50px] md:mb-5">
                <div
                    className="text-[#46B1F0] text-xl font-medium border-b border-solid border-[#46B1F0] w-full mb-4">
                    {attribute.name}
                </div>
                {options.map(
                    (option) => (
                        <div key={option[0]} className="mb-[10px] flex items-start min-h-[1.5rem] ps-[1.5rem]">
                            <input
                                defaultChecked={formattedParams[`attributes[${attribute.slug}][]`] && formattedParams[`attributes[${attribute.slug}][]`].includes(option[0])}
                                className="relative float-left -ms-[1.4rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] cursor-pointer appearance-none rounded-[0.15rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:inset-0 before:bg-transparent before:opacity-0 before:transition-[background-color_0.2s,transform_0.2s] before:content-[''] hover:before:bg-[#46b1f080] hover:before:opacity-100 hover:before:rounded-none checked:bg-primary checked:before:bg-transparent checked:after:content-[''] checked:after:absolute checked:after:inset-0 checked:after:m-auto checked:after:h-[10px] checked:after:w-[10px] checked:after:bg-[#46B1F0] checked:after:rounded-[2px] rtl:float-right dark:border-[#46B1F0] dark:checked:border-primary dark:checked:bg-primary"
                                type="checkbox"
                                name={`attributes[${attribute.slug}][]`}
                                value={option[0]} id={`${attribute.slug}_${option[0]}`} />
                            <label className="inline-block ps-[0.15rem] hover:cursor-pointer" htmlFor={`${attribute.slug}_${option[0]}`}>
                                {option[1]}
                            </label>
                        </div>
                    )
                )}
            </div>
        </>
    )
}
export default FilterAttribute
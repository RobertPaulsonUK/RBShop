"use client"
import {FC, useEffect, useState} from "react";
import {IProductAttribute} from "@/types/products/product.full.interface";


interface IVariationItem {
    attribute : IProductAttribute
    dataHandler : (key : string,value : string) => void
    defaultAttributes : object
}
const VariationItem:FC<IVariationItem> = ({attribute,dataHandler,defaultAttributes}) => {
    const [selectedOption, setSelectedOption] = useState<string>(defaultAttributes[attribute.slug]);
    useEffect(() => {
        dataHandler(attribute.slug,selectedOption)
    }, [selectedOption]);
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div className={"flex flex-col gap-[5px] items-center "}>
            <h4>
                {attribute.name}
            </h4>
            <div className={"flex items-center justify-items-start gap-[10px]"}>
                {attribute.options.map((option, index) => (
                    <label className={"radio-container"} key={index}>
                        <span className={`text-black relative z-[2] ${selectedOption === option.slug ? 'radio-selected' : ''}`}>{option.name}</span>
                        <input
                            checked={selectedOption === option.slug}
                            type="radio"
                            name={attribute.slug}
                            value={option.slug}
                            onChange={handleChange}
                        />
                        <span className="checkmark"></span>
                    </label>

                ))}
            </div>
        </div>
    )
}
export default VariationItem
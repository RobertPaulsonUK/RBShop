import {FC} from "react";
import TabButtonArrow from "@/components/icons/tabButtonArrow";

const CabinetTabButton:FC<
    {activeIndex : number,clickHandler : (index : number) => void,index : number,text : string}
> =
    ({activeIndex,clickHandler,index,text}) => {
    return(
        <li className={`cabinet_btn flex justify-between items-center gap-[10px] py-2 border-t border-b border-transparent cursor-pointer hover:border-t hover:border-b hover:border-[#46B1F0] duration-200 group sm:flex-row-reverse ${index === activeIndex ? 'active' : ''}`}
            onClick={() => clickHandler(index)}
        >
            <button
                className="text-base text-[#AEAEAE] duration-200 group-hover:text-[#46B1F0] text-left md:order-1 md:text-right">
                {text}
            </button>
            <TabButtonArrow/>
        </li>
    )
}
export default CabinetTabButton
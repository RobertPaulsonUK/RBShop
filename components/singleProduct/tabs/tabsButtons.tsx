"use client"
import {FC} from "react";

interface IInterface {
    isAttribute : boolean
    isContext : boolean
    attrButtonHandler : () => void
    contextButtonHandler : () => void
}
const TabsButtons:FC<IInterface> = ({isAttribute,attrButtonHandler,isContext,contextButtonHandler}) => {
    return(
        <>
            <div className="flex items-center justify-start gap-[85px] mb-6">
                <button
                    onClick={attrButtonHandler}
                    className={`btn_tab py-[10px] px-5 block rounded-[40px] bg-[#F6F6F6] border border-solid border-[#46B1F0] cursor-pointer text-[#333E48] text-sm font-medium duration-200 sm:w-full ${isAttribute ? 'active' : ''}`}>
                    Характеристики
                </button>
                <button
                    onClick={contextButtonHandler}
                    className={`btn_tab py-[10px] px-5 block rounded-[40px] bg-[#F6F6F6] border border-solid border-[#46B1F0] cursor-pointer text-[#333E48] text-sm font-medium duration-200 sm:w-full ${isContext ? 'active' : ''}`}>
                    Опис
                    товару
                </button>
            </div>
        </>
    )
}
export default TabsButtons
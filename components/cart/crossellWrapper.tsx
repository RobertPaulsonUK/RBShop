import {FC} from "react";
import {ICrossSellsInterface} from "@/types/cart/crosssels.interface";
import CrossellItem from "@/components/cart/item/crossellItem";

const CrossellWrapper:FC<{crosselItems : ICrossSellsInterface[],currency : string}> = ({crosselItems,currency}) => {
    return(
        <section className="pb-[100px] sm:pb-6">
            <div className="container">
                <div className="text-[#333E48] text-lg font-medium mb-6">Вас може також зацікавити</div>
                <div
                    className="grid grid-cols-4 gap-x-4 gap-y-10 lg:grid-cols-2 sm:gap-x-2 sm:gap-y-3 sm:flex sm:overflow-scroll no-scrollbar">
                    {crosselItems.map((item,index) => (
                        <CrossellItem
                            key={index}
                            item={item}
                            currency={currency}/>
                    ))}
                </div>
                </div>
        </section>
    )
}
export default CrossellWrapper
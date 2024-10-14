import {FC} from "react";
import {ICrossSellsInterface} from "@/types/cart/crosssels.interface";
import CrossellItem from "@/components/cart/item/crossellItem";
import {useTranslations} from "next-intl";

const Crossell:FC<{items : ICrossSellsInterface[],currency : string}> = ({items,currency}) => {
    const t = useTranslations('Cart')
    return(
        <>
            <section className="pb-[30px] pt-[32px] sm:pb-2 sm:pt-4">
                <div className="text-[#333E48] text-lg font-medium mb-6">
                    {t('CrosselsTitle')}
                </div>
                <div className=" gap-3 flex overflow-scroll no-scrollbar pb-[50px]">
                    {items.map(
                        (item,index) => (
                            <CrossellItem key={index}
                                          currency={currency}
                                          item={item}/>
                        )
                    )}
                </div>
            </section>
        </>
    )
}
export default Crossell
import {FC} from "react";
import {IProductAttribute} from "@/types/products/product.full.interface";

interface ITabsContent {
    attributes : IProductAttribute[]
    context : string
    isAttrActive : boolean
    isContextActive : boolean
}
const TabsContent:FC<ITabsContent> = ({attributes,context,isAttrActive,isContextActive}) => {
    return(
        <>
            <div className={`tab_item opacity-0 invisible h-0 ${isAttrActive ? 'active' : ''}`}>
                {attributes && attributes.map(({name,options},index) => (
                    <div key={index} className="text-[#AEAEAE] text-sm font-medium mb-1">{name} :
                        <span className="text-[#333E48]">
                            {` ${options.join(', ')}`}
                        </span>
                    </div>
                ))}
            </div>
            <div
                className={`tab_item opacity-0 invisible h-0 tab-content ${isContextActive ? 'active' : ''}`}
                dangerouslySetInnerHTML={{ __html: context }} />
        </>
    )
}
export default TabsContent
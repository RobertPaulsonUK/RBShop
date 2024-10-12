"use client"
import {FC,useState} from "react";
import TabsButtons from "@/components/singleProduct/tabs/tabsButtons";
import TabsContent from "@/components/singleProduct/tabs/tabsContent";
import {IProductAttribute} from "@/types/products/product.full.interface";

interface ITabs {
    attributes : IProductAttribute[]
    content : string
}
const Tabs:FC<ITabs> = ({attributes,content}) => {
    const [attrIsActive,setAttrIsActive] = useState(true)
    const [contextIsActive,setContextIsActive] = useState(false)

            const attrButtonHandler = () => {
        setContextIsActive(false)
        setAttrIsActive(true)
    }
    const contextButtonHandler = () => {
        setAttrIsActive(false)
        setContextIsActive(true)
    }

    return(
        <>
            <TabsButtons
                isAttribute={attrIsActive}
                isContext={contextIsActive}
                attrButtonHandler={attrButtonHandler}
                contextButtonHandler={contextButtonHandler}/>
            <TabsContent
                attributes={attributes}
                context={content}
                isAttrActive={attrIsActive}
                isContextActive={contextIsActive}/>
        </>
    )
}
export default Tabs
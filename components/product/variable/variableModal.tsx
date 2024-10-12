import {FC, useEffect, useState} from "react";
import ModalClose from "@/components/icons/modalClose";
import {IProductAttribute, IProductVariation} from "@/types/products/product.full.interface";
import VariationItem from "@/components/product/variable/variationItem";
import {getVariationsAttributesSummary} from "@/hooks/VariationHook";
import VariationView from "@/components/product/variable/variationView";
import VariableDisabledButton from "@/components/product/addToCart/variable/variableDisabledButton";
import VariableActiveButton from "@/components/product/addToCart/variable/variableActiveButton";
import VariationEmptyView from "@/components/product/variable/variationEmptyView";

interface IVariableModal {
    closeButtonHandler : () => void
    variations : IProductVariation[]
}
const VariableModal:FC<IVariableModal> = ({closeButtonHandler,variations}) => {
    const variationsAttributes = variations.map(variation => {
        return variation.attributes.reduce((acc, { slug, options }) => {
            acc[slug] = options[0].slug;
            return acc;
        }, {});
    });
    const attributesSummary = getVariationsAttributesSummary(variations);
    const [variationData,setVariationData] = useState(variationsAttributes[0])
    const [isDisabled,setIsDisabled] = useState(false)
    const [currentVariation,setCurrentVariation] = useState<null | number>(0)

    useEffect(() => {
        checkIsVariationHandler()
    }, [variationData]);
    const variationDataHandler = (key, value) => {
        setVariationData((prevData) => ({
            ...prevData,
            [key]: value,
        }))
    };

    const checkIsVariationHandler = () => {
        const index = variationsAttributes.findIndex(variation => {
            return Object.keys(variation).every(key => {
                const attrValue = variation[key];
                const dataValue = variationData[key];
                return attrValue === dataValue;
            })
        })
        const exists = index !== -1
        setIsDisabled(!exists)
        setCurrentVariation(index)
    };
    return(
        <div className={"fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[100] bg-[hsla(0,0%,0%,0.443)] duration-200"}>
            <div className={"max-w-[800px] mx-auto mt-8 lg:max-w-[95%]"}>
                <div className={"bg-[#F6F6F6] py-6 px-10 rounded-3xl relative sm:p-4 sm:pt-10 max-h-[90vh] overflow-y-autobg-[#F6F6F6] "}>
                    <ModalClose clickHandler={closeButtonHandler}/>
                    {!isDisabled ?
                        <VariationView variation={variations[currentVariation]}/>
                        :
                        <VariationEmptyView/>
                    }
                    <div className={"flex gap-[20px] flex-wrap justify-center"}>
                        {attributesSummary.map((item,index) => (
                            <VariationItem key={index}
                                           attribute={item}
                                           defaultAttributes={variationsAttributes[0]}
                                           dataHandler={variationDataHandler}/>
                        ))}
                    </div>
                    <div className={"mt-[20px]"}>
                        {
                            isDisabled ?
                                <VariableDisabledButton/>
                                :
                                <VariableActiveButton id={variations[currentVariation].id}
                                                      closeHandler={closeButtonHandler}
                                                      stockStatus={variations[currentVariation].stock_status}
                                                      stock={variations[currentVariation].stock}/>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default VariableModal
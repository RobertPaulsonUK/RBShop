'use client'
import {FC, useEffect, useState} from "react";
import VariableModal from "@/components/product/variable/variableModal";
import {IProductAttribute, IProductVariation} from "@/types/products/product.full.interface";
import {useTranslations} from "next-intl";

const VariableAddToCart:FC<{variations : IProductVariation[]}> = ({variations}) => {
    const [isOpen,setIsOpen] = useState(false)
    const t = useTranslations('Product')
    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add('no-scroll')
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
        return () => {
            document.documentElement.classList.remove('no-scroll');
        };
    }, [isOpen]);
    const buttonClickHandler = () => {
        setIsOpen(true)
    }
    const closeButtonHandler = () => {
        setIsOpen(false)
    }
    return(
        <>
            <button
                onClick={buttonClickHandler}
                className={`goods__item-details-btn relative min-w-[107px] py-[10px]  px-5 rounded-[40px] bg-[#46B1F0] text-white hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center`}
            >
                {t('VariableChooseText')}
            </button>
            {isOpen && <VariableModal closeButtonHandler={closeButtonHandler}
                                      variations={variations}/>}
        </>
    )
}
export default VariableAddToCart
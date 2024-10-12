"use client"
import {FC} from "react";
import ActiveStateText from "@/components/ui/actionsStates/activeText";
import RegularAddToCartText from "@/components/ui/actionsStates/addToCart/regularText";
import RegularText from "@/components/ui/actionsStates/regularText";

interface Props {
    isInProcess : boolean
    isDisabled : boolean
    regularText : string
    activeText : string
    clickHandler?: () => void
    staticClass? : string
    disabledClass? : string
}
const AnimatedTextButton:FC<Props> = (
    {isInProcess,isDisabled,regularText,activeText,clickHandler,staticClass,disabledClass}
) => {
    const buttonStaticClass = staticClass ? staticClass : 'goods__item-details-btn relative min-w-[107px] py-[10px]  px-5 rounded-[40px] bg-[#46B1F0] text-white hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 flex items-center justify-center gap-2 xl:mx-auto sm:w-full sm:text-center'
    const disabledButtonClass = disabledClass ? disabledClass : 'bg-[#AEAEAE] text-[#F6F6F6] pointer-events-none'
    return(
        <button
            onClick={(e) => {
                if (clickHandler) {
                    e.preventDefault();
                    clickHandler();
                }

            }}
            className={`${buttonStaticClass} ${isDisabled ? disabledButtonClass  : ''} ${isInProcess ? 'is-adding' : ''}`}
        >
            {isInProcess ?
                (
                    <ActiveStateText text={activeText}/>
                )
                :
                (
                    <RegularText text={regularText}/>
                )
            }

        </button>
    )
}
export default AnimatedTextButton
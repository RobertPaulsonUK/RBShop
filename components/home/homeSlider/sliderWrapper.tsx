import {FC, ReactNode} from "react";

const SliderWrapper:FC<{children : ReactNode,width : number}> = ({children,width}) => {
    return(
        <div className={`home-slider-wrapper flex`}
        style={{transform : `translateX(${width}px)`}}
        >
            {children}
        </div>
    )
}
export default SliderWrapper
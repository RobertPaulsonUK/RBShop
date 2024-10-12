"use client"
import {FC} from "react";

interface IButton {
    classname : string
    text : string
    clickHandler : () => void
}
const Button:FC<IButton> = ({classname,text,clickHandler}) => {
    return(
        <>
            <button
                onClick={(e) => {
                    e.preventDefault()
                    clickHandler()
                }}
                className={classname}
            >
                {text}
            </button>
        </>
    )
}
export default Button
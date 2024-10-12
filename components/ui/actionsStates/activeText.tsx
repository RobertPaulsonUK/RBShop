import {FC} from "react";

const ActiveStateText:FC<{text : string}> = ({text}) => {
    return(
        <>
            <span
                data-text={text}
                className={"add-to-cart-process"}>
                {text}
            </span>
        </>
    )
}
export default ActiveStateText
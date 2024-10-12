import {FC} from "react";
import Image from "next/image";

const Minus:FC<{clickHandler : () => void}> = ({clickHandler}) => {
    return(
        <>
            <button
                onClick={clickHandler}
            >
                <Image
                    src={"/images/basket/minus.svg"}
                    alt={"minus"}
                    width={13}
                    height={1}/>
            </button>
        </>
    )
}
export default Minus
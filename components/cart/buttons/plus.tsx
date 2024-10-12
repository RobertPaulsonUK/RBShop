import {FC} from "react";
import Image from "next/image";

const Plus:FC<{clickHandler : () => void,isDisabled : boolean}> = ({clickHandler,isDisabled}) => {
    return(
        <>
            <button
                className={isDisabled ? 'pointer-events-none opacity-10' : ''}
                onClick={clickHandler}
            >
                <Image
                    src={"/images/basket/plus.svg"}
                    alt={"plus"}
                    width={14}
                    height={13}/>
            </button>
        </>
    )
}
export default Plus
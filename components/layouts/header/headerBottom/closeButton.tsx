import {FC} from "react";
import Image from "next/image";

const CloseButton:FC<{isActive : boolean,closeHandler : (value : boolean) => void}> = ({isActive,closeHandler}) => {
    return(
        <>
            <div className={`pannel__close order-2 hidden cursor-pointer ${isActive ? ' active' : ''}`}
            onClick={() => closeHandler(false)}
            >
               <Image
                   src={"images/header/close.svg"}
                   alt={"close"}
                   width={40}
                   height={40}
               />
            </div>
        </>
    )
}
export default CloseButton

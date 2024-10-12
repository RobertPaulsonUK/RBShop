import {FC} from "react";

const ActiveQty:FC<{qty : number}> = ({qty}) => {
    return(
        <span className="absolute -top-1 right-0 text-[14px] leading-4 text-[#F6F6F6] font-medium rounded-full bg-[#333E48] px-[4px]">
            {qty}
        </span>
    )
}
export default ActiveQty
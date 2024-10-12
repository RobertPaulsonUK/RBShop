import {FC} from "react";

const CartGeneralCount:FC<{count : number,className? : string}> = ({count,className}) => {
    return(
        <div className={className ? className : 'text-sm text-[#AEAEAE] font-medium mb-6 sm:mb-3'}>
            {count} {count > 1 ? ' товари' : 'товар'}
        </div>
    )
}
export default CartGeneralCount
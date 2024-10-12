import {FC} from "react";

const ShopTitle:FC<{title : string}> = ({title}) => {
    return(
        <h1
            className="text-[40px] leading-[48px] font-semibold text-[#46B1F0] mb-10 sm:text-[32px] sm:leading-[34px] sm:mb-5 sm:font-medium">
            {title}
        </h1>
    )
}
export default ShopTitle
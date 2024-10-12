import {FC} from "react";

const TabTitle:FC<{title : string}> = ({title}) => {
    return(
        <div className="text-[32px] leading-[34px] text-[#46B1F0] mb-5 sm:text-lg">
            {title}
        </div>
    )
}
export default TabTitle
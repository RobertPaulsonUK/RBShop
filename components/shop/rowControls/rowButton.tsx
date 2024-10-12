import {FC} from "react";
import {IRowControls} from "@/components/shop/rowControls/rowControls";

const RowButton:FC<IRowControls> = ({isGrid,changeGridToRow}) => {
    return(
        <>
            <svg
                onClick={changeGridToRow}
                className={`sorting_row cursor-pointer duration-200 ${isGrid ? '' : 'active'} `} width="36" height="36"
                 viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="10.2" rx="1.5" fill="#AEAEAE" />
                <rect x="-0.00012207" y="12.9" width="36" height="10.2" rx="1.5" fill="#AEAEAE" />
                <rect x="-0.00012207" y="25.8" width="36" height="10.2" rx="1.5" fill="#AEAEAE" />
            </svg>
        </>
    )
}
export default RowButton
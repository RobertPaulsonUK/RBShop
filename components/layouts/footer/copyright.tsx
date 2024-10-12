import {FC} from "react";

interface IInterface {
    copyright : string
}
const Copyright:FC<IInterface> = ({copyright}) => {

    return(
        <>
            <div className="text-sm font-normal text-[#F6F6F6] lg:order-2">
                {copyright}
            </div>
        </>
    )
}
export default Copyright
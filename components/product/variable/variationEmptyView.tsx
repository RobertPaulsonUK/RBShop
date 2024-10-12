import {FC} from "react";

const VariationEmptyView:FC = () => {
    return(
        <div className={"min-h-[150px] mb-[20px] flex justify-center items-center text-xl text-[#333E48] font-semibold"}>
            <p>
                Наразі такий товар відсутній
            </p>
        </div>
    )
}
export default VariationEmptyView
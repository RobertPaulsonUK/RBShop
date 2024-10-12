import {FC} from "react";

const LangPanel:FC = () => {
    return(
        <>
            <div className="flex justify-center items-center gap-[10px] -mr-5 lg:gap-8">
                <a className="active lang__link text-sm font-medium text-[#AEAEAE] lg:text-base" href="">Укр</a>
                <a className="text-sm font-medium text-[#AEAEAE] lg:text-base" href="">Рос</a>
            </div>
        </>
    )
}
export default LangPanel
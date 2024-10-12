import {FC} from "react";

const InputError:FC<{text : any}> = ({text}) => {
    return(
        <div className={"text-base text-center font-medium text-[#F91600]"}>
            {text}
        </div>
    )
}
export default InputError
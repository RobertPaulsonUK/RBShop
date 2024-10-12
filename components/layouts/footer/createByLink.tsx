import {FC} from "react";
import Link from "next/link";

interface IInterface {
    desktop : boolean
}
const CreateByLink:FC<IInterface> = ({desktop}) => {
    return(

        <>
            <div className={`text-sm font-normal text-[#F6F6F6] ${desktop ? 'lg:hidden' : 'lg:block hidden bg-[#46B1F0] text-center pb-3'}`}>
                Created by <Link target={"_blank"} href={"https://levelmedia.ua/"}>LevelMedia</Link>
            </div>
        </>
    )
}
export default CreateByLink
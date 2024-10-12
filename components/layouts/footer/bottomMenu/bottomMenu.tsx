import {FC} from "react";
import {BottomMenu} from "@/types/footer.interface";
import Link from "next/link";

interface IInterface {
    bottomMenu : BottomMenu[]
}
const BottomMenu:FC<IInterface> = ({bottomMenu}) => {
    return(
        <>
            {bottomMenu.length > 0 && bottomMenu.map((item,index) => (
                <Link key={index} className={"text-sm font-normal text-[#F6F6F6]"} href={item.url}>
                    {item.title}
                </Link>
            ))}
        </>
    )
}
export default BottomMenu
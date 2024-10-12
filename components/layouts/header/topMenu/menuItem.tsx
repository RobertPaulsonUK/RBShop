import {FC} from "react";
import {ITopMenu} from "@/types/header.interface";
import Link from "next/link";

interface IMenuItem {
    item : ITopMenu
}
const MenuItem:FC<IMenuItem> = ({item}) => {
    return(
        <>
            <li>
                <Link href={item.url}
                className={"pb-[10px] text-sm font-medium text-[#333E48] transition-all hover:border-b hover:border-[#46B1F0] lg:text-right lg:pb-1 lg:text-base"}>
                    {item.title}
                </Link>
            </li>
        </>
    )
}
export default MenuItem
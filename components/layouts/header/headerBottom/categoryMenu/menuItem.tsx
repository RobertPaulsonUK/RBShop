import {FC} from "react";
import {IBottomMenu} from "@/types/header.interface";
import Link from "next/link";
import ArrowRight from "@/components/icons/arrowRight";
interface ICategoryMenuItem {
    item : IBottomMenu
}
const CategoryMenuItem:FC<ICategoryMenuItem> = ({item}) => {
    return(
        <>
            <li
                className="flex justify-between items-center gap-[10px] py-2 border-t border-b border-transparent cursor-pointer hover:border-t hover:border-b hover:border-[#46B1F0] duration-200 group">
                <Link href={item.url} className={"text-base text-[#AEAEAE] duration-200 group-hover:text-[#46B1F0] md:order-1 md:text-right"}>
                    {item.title}
                </Link>
                <ArrowRight/>
            </li>
        </>
    )
}
export default CategoryMenuItem
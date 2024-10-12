import {FC} from "react";
import {IHomeNavItem} from "@/components/home/navigation/homeNavigation";
import Link from "next/link";
import LinkArrow from "@/components/home/navigation/linkArrow";

const HomeNavItem:FC<IHomeNavItem> = ({title,link}) => {
    return(
        <>
            <Link
                className="w-full p-6 rounded-[24px] bg-[#F6F6F6] duration-200 border-2 border-solid border-transparent hover:shadow-none hover:border-[#46B1F0] group  shadow_mod sm:py-2 sm:px-3"
                href={link.url}>
                <div className="text-[#46B1F0] text-xl mb-[5px] sm:text-base">{title}</div>
                <div className="flex justify-between items-center">
                    <div className="text-sm text-[#AEAEAE]">{link.title}</div>
                    <LinkArrow/>
                </div>
            </Link>
        </>
    )
}
export default HomeNavItem
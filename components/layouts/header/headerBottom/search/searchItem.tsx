import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {ISearchItemInterface} from "@/types/search.interface";

const SearchItem:FC<ISearchItemInterface> = ({title,url,imageUrl}) => {
    return(
        <>
            <Link
                href={url}
                className={"flex items-start justify-start gap-5 mb-1"}
            >
                <Image src={imageUrl} alt={title} width={48} height={48}/>
                <div className="text-[#333E48] text-sm font-medium hover:text-[#46B1F0] duration-200">
                    {title}
                </div>
            </Link>
        </>
    )
}
export default SearchItem
import {FC} from "react";
import {ICatalogItem} from "@/types/footer.interface";
import Link from "next/link";

const CatalogItem:FC<ICatalogItem> = ({link}) => {
    return(
        <>
            <li className="mb-1">
                <Link className="text-[#AEAEAE] font-medium text-sm" href={link.url}>
                    {link.title}
                </Link>
            </li>
        </>
    )
}
export default CatalogItem
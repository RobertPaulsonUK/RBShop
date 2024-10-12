import {FC} from "react";
import Link from 'next/link';

const PaginateLink:FC<{page : number,url : string}> = ({page,url}) => {

    return(
        <>
            <Link
                href={url}
                className={"text-base font-medium text-[#333E48]"}
            >
                {page}
            </Link>
        </>
    )
}
export default PaginateLink
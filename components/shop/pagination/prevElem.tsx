import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const PrevElem:FC<{url : string}> = ({url}) => {
    return(
        <>
            <Link
                className={"-ml-2 rotate-180"}
                href={url}>
                <Image
                    width={36}
                    height={36}
                    src={"/images/arrow-right.svg"}
                    alt={"arrow-right"}/>
            </Link>
        </>
    )
}
export default PrevElem
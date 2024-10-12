import {FC} from "react";
import Image from "next/image";
import Link from "next/link";

const NextElem:FC<{url : string}> = ({url}) => {
    return(
        <>
            <Link
                className={"-ml-2"}
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
export default NextElem
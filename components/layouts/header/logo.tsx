import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

interface ILogo {
    logoUrl : string,
    siteName : string
}
const Logo:FC<ILogo> = ({logoUrl,siteName}) => {
    return (
        <>
            <Link href={'/'}
            className={"max-w-[100px]"}>
                <Image src={logoUrl} alt={siteName} className={"w-full"}
                width={100}
                height={16}/>
            </Link>
        </>
    )
}
export default Logo
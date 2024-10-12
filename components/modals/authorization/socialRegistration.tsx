import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const SocialRegistration:FC = () => {
    return(
        <>
            <div
                className="text-sm font-normal text-[#333E48] text-center mb-2 mt-2 pt-2 border-t border-solid border-[#46B1F0]">
                або увійти за допомогою:
            </div>
            <div className={"flex justify-center items-center gap-3 mb-3"}>
                <Link href={"#"}>
                    <Image
                        src={'/images/modal/icon-1.svg'}
                        height={36}
                        width={36}
                        alt={'facebook'}/>
                </Link>
                <Link href={"#"}>
                    <Image
                        src={'/images/modal/icon-2.svg'}
                        height={36}
                        width={36}
                        alt={'google'}/>
                </Link>
                <Link href={"#"}>
                    <Image
                        src={'/images/modal/icon-3.svg'}
                        height={36}
                        width={36}
                        alt={'cloud'}/>
                </Link>
            </div>
        </>
    )
}
export default SocialRegistration
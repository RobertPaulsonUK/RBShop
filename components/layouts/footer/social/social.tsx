import {FC} from "react";
import {ISocial} from "@/types/footer.interface";
import Link from "next/link";
import Image from "next/image";

interface IInterface {
    socialData : ISocial
}
const Social:FC<IInterface> = ({socialData}) => {
    const {title,items} = socialData

    return(
        <>
            <div className="md:hidden">
                <div className="text-base font-medium text-[#333E48] mb-5 text-right md:hidden">{title}</div>
                <div className="flex items-center justify-end gap-[10px] mr-[50px] lg:mr-0">
                    { items.length > 0 && items.map(
                        ({link,image},index) => (
                            <Link key={index} href={link.url}>
                                <Image width={36}
                                       height={36}
                                       src={image.url}
                                       alt={image.title}/>
                            </Link>
                        )
                    ) }

                </div>
            </div>
        </>
    )
}
export default Social
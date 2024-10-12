import {FC} from "react";
import {IInformation, ISocial} from "@/types/footer.interface";
import Link from "next/link";
import Image from "next/image";

interface IInterface {
    information : IInformation
    social : ISocial
}
const Information:FC<IInterface> = ({information,social}) => {

    return(
        <>
            <div>
                <div className="text-base font-medium text-[#333E48] mb-5">{information.title}</div>
                <div className="flex items-start justify-start gap-[63px] lg:gap-7 lg:flex-col">

                    <div>
                        {information.items.length > 0 && information.items.map(({text},index) => (
                            <div key={index} className={`text-sm text-[#333E48] ${index === 0 && 'mb-3'}`}>{text}</div>
                        ))}
                    </div>

                    <div>
                        {information.items.length > 0 && information.items.map(({phone},index) => (
                            <Link key={index} className={`text-sm text-[#333E48] block ${index === information.items.length - 1 ? '' : ' mb-1'}`} href={`tel:${phone}`}>
                                {phone}
                            </Link>
                        ))}
                    </div>

                    <div className="md:block hidden">
                        <div className="text-base font-medium text-[#333E48] mb-5 text-right md:hidden">{social.title}</div>
                        <div className="flex items-center justify-end gap-[10px] mr-[50px] lg:mr-0">
                            {social.items.length > 0 && social.items.map(
                                ({link,image},index) => (
                                    <Link href={link.url} target={"_blank"}>
                                        <Image width={36} height={36} src={image.url} alt={image.title}/>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Information
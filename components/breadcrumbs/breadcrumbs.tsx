import {FC} from "react";
import {IBreadcrumb} from "@/types/shop.interface";
import Link from "next/link";

interface IInterface {
    items : IBreadcrumb[]
}
const Breadcrumbs:FC<IInterface> = ({items}) => {
    return(
        <>
            <div className="pt-[200px] mb-6 sm:pt-[170px]">
                <div className="container">
                    <div className="flex items-center justify-start flex-wrap">
                        {items.length > 0 && items.map((item,index) => (
                            index + 1 !== items.length ? (
                                <Link href={item.url}
                                      key={item.id}
                                      className="text-[#AEAEAE] text-sm relative mr-[10px] pr-[10px] block hover:text-[#46B1F0] after:block after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-[url('/images/breadcrumbs.svg')] after:w-[2px] after:h-[16px] after:bg-no-repeat"
                                >
                                    {item.title}
                                </Link>
                            ) : (
                                <div key={item.id} className="text-[#46B1F0] text-sm">{item.title}</div>
                            )
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Breadcrumbs
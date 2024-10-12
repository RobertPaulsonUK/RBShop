import {FC} from "react";
import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import Link from "next/link";
import Image from "next/image";

interface IInterface {
    product : IProductSimpleInterface
}
const SaleProduct:FC<IInterface> = ({product}) => {
    return(
        <div className={"home-slide"}>
            <Link
                className={"flex justify-center items-center gap-[100px] max-w-[850px] mx-auto pt-6 pb-14 xl:gap-[30px] lg:flex-col-reverse sm:py-7 lg:px-8 sm:gap-[16px]"}
                href={product.link}>
                <div className="w-[60%] lg:w-[70%] md:w-[100%]">
                    <div
                        className="mb-[10px] text-[40px] leading-[48px] font-semibold text-[#F6F6F6] sm:text-base">
                        Спеціальна пропозиція
                    </div>
                    <div className="mb-[10px] text-xl text-[#F6F6F6] sm:text-sm">{product.name}</div>
                    <div
                        className="text-[40px] leading-[48px] font-bold text-[#F6F6F6] sm:text-[32px] sm:leading-[34px]">
                        {product.salePrice}
                        <span
                            className="text-[20px] leading-[24px] font-bold text-[#F6F6F6] sm:text-[18px]">{product.currency}</span>
                    </div>
                </div>
                <div className="w-[40%] relative lg:w-[60%] md:w-[100%]">
                    <div
                        className="bg-[#005BA9] rounded-tr-[20px] rounded-bl-[20px] absolute top-0 right-0 min-w-[132px] py-2">
                        <div className="text-[13px] leading-6 text-[#F6F6F6] text-center font-normal">
                            Знижка
                        </div>
                        <div className="text-xl font-bold text-center text-[#F6F6F6]">{product.regularPrice - product.salePrice}<span
                            className="text-xs font-bold text-center text-[#F6F6F6]">{product.currency}</span>
                        </div>
                    </div>
                    <Image className="rounded-3xl mx-auto w-full"
                           src={product.image}
                           alt={product.name}
                           width={300}
                           height={300}
                    />
                </div>
            </Link>
        </div>
    )
}
export default SaleProduct
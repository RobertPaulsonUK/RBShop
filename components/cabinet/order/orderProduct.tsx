import {FC} from "react";
import {IOrderItem} from "@/types/user/user.data.interface";
import Image from "next/image";

const OrderProduct:FC<{product : IOrderItem}> = ({product}) => {
    return(
        <div className="flex items-stretch justify-start gap-5 mt-2">
            <div className="min-w-[88px]">
                <Image src={product.image}
                       alt={product.name}
                       width={88}
                       height={88}
                       className={"w-full"}/>
            </div>
            <div className="w-full relative pr-16">
                <div className="text-[#333E48] text-sm font-medium">
                    {product.name}
                </div>
                <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[#333E48] text-2xl font-bold">
                    {product.total}
                    <span className="text-[#333E48] text-lg font-bold">{product.currency}</span>
                </div>
            </div>
        </div>
    )
}
export default OrderProduct
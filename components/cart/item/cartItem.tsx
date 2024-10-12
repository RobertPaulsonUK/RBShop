import {FC} from "react";
import {ICartItemInterface} from "@/types/cart/cart.item.interface";
import Link from "next/link";
import Image from "next/image";
import CartItemPrice from "@/components/cart/item/cartItenPrice";

const CartItem:FC<{item : ICartItemInterface,currency : string}> = ({item,currency}) => {
    return(
        <div className="flex justify-between items-center px-[4px] pb-4 sm:items-end">
            <Link
                href={`/product/${item.slug}`}
                className={"flex items-start justify-start gap-5 sm:gap-2"}
            >
                <div className="max-w-[88px] sm:min-w-[88px] sm:min-h-[88px]">
                    <Image src={item.featured_image}
                           alt={item.title}
                           width={88}
                           height={88}
                           className={"w-full rounded-md"}/>
                </div>
                <div className="text-sm text-[#333E48] font-medium max-w-[250px] sm:max-w-[200px]">
                    {item.title}
                </div>
            </Link>
            <CartItemPrice price={item.price}
                           quantity={item.quantity}
                           currency={currency}
                            stockQuantity={item.stock_status.stock_quantity}
                           item_key={item.item_key}/>
        </div>
    )
}
export default CartItem
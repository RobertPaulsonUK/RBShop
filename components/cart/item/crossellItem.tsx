import {FC} from "react";
import {ICrossSellsInterface} from "@/types/cart/crosssels.interface";
import Link from "next/link";
import Image from "next/image";
import SimpleAddToCart from "@/components/product/addToCart/simpleAddToCart";
import AddToWishlist from "@/components/product/addToWishlist";
import ProductPrice from "@/components/product/productPrice";
import VariableAddToCart from "@/components/product/addToCart/variableAddToCart";

const CrossellItem:FC<{item : ICrossSellsInterface,currency : string}> = ({item,currency}) => {
    return(
        <div className="min-w-[300px] rounded-2xl w-full hover:shadow-xl duration-200 sm:min-w-[175px]">
            <Link href={`/product/${item.slug}`}
                  className={"mb-4 w-full block"}>
                <Image src={item.image}
                       alt={item.name}
                       className={"w-full rounded-tl-2xl rounded-tr-2xl"}
                       width={300}
                       height={300}/>
            </Link>

            <div className="px-2 pb-2 relative">
                <Link href={`/product/${item.slug}`}
                      className={"mb-4 text-sm text-[#333E48] max-w-[228px] block"}
                >
                    {item.name}
                </Link>
                <AddToWishlist id={item.id} className={"absolute right-2 top-0 xl:bottom-[60px]"}/>
                <div className="flex justify-between items-center xl:flex-col xl:items-start">
                    <ProductPrice regularPrice={item.regularPrice}
                                  isOnSale={item.isOnSale}
                                  salePrice={item.salePrice}
                                  currency={currency}/>
                    {item.type === 'simple' && <SimpleAddToCart id={item.id} stockStatus={item.stockStatus} stock={item.stock}/> }
                    {item.type === 'variable' && <VariableAddToCart attributes={item.attributes} variations={item.variations}/> }
                </div>
            </div>
        </div>
    )
}
export default CrossellItem
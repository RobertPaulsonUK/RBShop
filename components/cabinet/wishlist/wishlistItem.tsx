import {FC} from "react";
import {IWishlistItem} from "@/types/wishlist/wishlist.interface";
import Link from "next/link";
import Image from "next/image";
import AddToWishlist from "@/components/product/addToWishlist";
import Attributes from "@/components/product/attributes";
import ProductPrice from "@/components/product/productPrice";
import SimpleAddToCart from "@/components/product/addToCart/simpleAddToCart";
import VariableAddToCart from "@/components/product/addToCart/variableAddToCart";

const WishlistItem:FC<{product : IWishlistItem}> = ({product}) => {
    return(
        <div className="goods__item rounded-2xl w-full hover:shadow-xl duration-200 relative xl:w-auto">
            <Link href={product.link}
                  className={"goods__item-photo mb-4 w-full block"}>
                <Image className={"w-full rounded-tl-2xl rounded-tr-2xl"}
                       src={product.image}
                       alt={product.name}
                       width={175}
                       height={175}/>
            </Link>
            <div className="goods__item-details px-2 pb-2 relative">
                <AddToWishlist id={product.id} className={"goods__item-details-like absolute right-2 xl:bottom-[60px]"}/>
                <Link href={product.link} className={"goods__item-details-title mb-4 text-sm text-[#333E48] max-w-[228px] block"}>
                    {product.name}
                </Link>
                {product.attributes && <Attributes items={product.attributes}/>}
                <div className="goods__item-details-price-wrapper flex justify-between items-center xl:flex-col xl:items-start">
                    <ProductPrice regularPrice={product.regularPrice} isOnSale={product.isOnSale} salePrice={product.salePrice} currency={product.currency}/>
                    {product.type === 'simple' ?
                        <SimpleAddToCart id={product.id} stockStatus={product.stockStatus} stock={product.stock}/>
                        :
                        <VariableAddToCart attributes={product.attributes} variations={product.variations}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default WishlistItem
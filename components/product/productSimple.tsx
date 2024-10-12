import {FC} from "react";
import AddToWishlist from "@/components/product/addToWishlist";
import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import Link from "next/link";
import ProductPrice from "@/components/product/productPrice";
import SimpleAddToCart from "@/components/product/addToCart/simpleAddToCart";
import NewArrival from "@/components/product/newArrival";
import ProductImage from "@/components/product/productImage";
import VariableAddToCart from "@/components/product/addToCart/variableAddToCart";
interface IInterface {
    product : IProductSimpleInterface
}

const ProductSimple:FC<IInterface> = ({product}) => {
    return(
        <>
            <div className="rounded-2xl w-full hover:shadow-xl duration-200 relative">
                {product.newProduct && <NewArrival/>}
                <ProductImage link={product.link} name={product.name} image={product.image}/>
                <div className="px-2 pb-2 relative">
                    <AddToWishlist id={product.id}/>
                    <Link href={product.link} className={"mb-4 text-sm text-[#333E48] max-w-[228px] block"}>
                        {product.name}
                    </Link>
                    <div className="flex justify-between items-center xl:flex-col xl:items-start">
                        <ProductPrice regularPrice={product.regularPrice} isOnSale={product.isOnSale} salePrice={product.salePrice} currency={product.currency}/>
                        {product.type === 'simple' ?
                            <SimpleAddToCart id={product.id} stockStatus={product.stockStatus} stock={product.stock}/>
                            :
                            <VariableAddToCart attributes={product.attributes} variations={product.variations}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductSimple
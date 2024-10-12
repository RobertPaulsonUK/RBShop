import {FC} from "react";
import {IProductVariation} from "@/types/products/product.full.interface";
import Image from "next/image";
import ProductPrice from "@/components/product/productPrice";
import SimpleAddToCart from "@/components/product/addToCart/simpleAddToCart";

const VariationView:FC<{variation : IProductVariation}> = ({variation}) => {

    return(
        <div className={"flex gap-[10px] justify-center items-start mb-[20px] min-h-[150px]"}>
            <div>
                <Image src={variation.image}
                       width={150}
                       height={150}
                       className={"rounded-2xl max-w-[100%] max-h-[100%]"}
                       alt={variation.name}/>
            </div>
            <div className={"flex flex-col gap-[10px]"}>
                <h4 className={"mb-4 text-sm text-[#333E48] max-w-[228px] block"}>
                    {variation.name}
                </h4>
                <ProductPrice regularPrice={parseInt(variation.regular_price)}
                              isOnSale={parseInt(variation.sale_price) > 0}
                              salePrice={parseInt(variation.sale_price)}
                              currency={variation.currency}/>
            </div>
        </div>
    )
}
export default VariationView
import {FC} from "react";
import {IProductFullInterface} from "@/types/products/product.full.interface";
import RowControls from "@/components/shop/rowControls/rowControls";
import ProductFull from "@/components/product/productFull";


const Products:FC<{products : IProductFullInterface[]}> = ({products}) => {
    return(
        <>
            <div
                className="goods__items w-full grid grid-cols-3 gap-x-4 gap-y-10 lg:grid-cols-2 md:mt-[88px] sm:gap-x-2 sm:gap-y-3 relative sm:mt-[70px]">
                <RowControls/>
                {products && products.length && products.map(
                    (product) => (
                        <ProductFull key={product.id} product={product}/>
                    )
                )}
            </div>
        </>
    )
}
export default Products
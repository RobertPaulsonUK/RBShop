import {FC} from "react";
import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import ProductSimple from "@/components/product/productSimple";

const RelatedProducts:FC<{products : IProductSimpleInterface[]}> = ({products}) => {
    return(
        <>
            <section className="pb-[100px] sm:pb-6">
                <div className="container">
                    <div className="text-[#46B1F0] text-lg font-medium mb-6">Схожі товари:</div>
                    <div
                        className="grid grid-cols-4 gap-x-4 gap-y-10 lg:grid-cols-2 sm:gap-x-2 sm:gap-y-3 sm:flex sm:overflow-scroll no-scrollbar">
                        {products.length > 0 && products.map(
                            (product) =>
                                (<ProductSimple key={product.id} product={product}/>)
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default RelatedProducts
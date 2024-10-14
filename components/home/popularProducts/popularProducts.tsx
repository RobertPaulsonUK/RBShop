import {FC} from "react";
import {IProductSimpleInterface} from "@/types/products/product.simple.interface";
import ProductSimple from "@/components/product/productSimple";
import {useTranslations} from "next-intl";

interface IProducts {
    products : IProductSimpleInterface[]
}
const PopularProducts:FC<IProducts> = ({products}) => {
    const t = useTranslations('HomePage')
    return(
        <>
            <section>
                <div className="container">
                    <div
                        className="text-[40px] leading-[48px] font-semibold text-[#46B1F0] mb-10 sm:text-x-[32px] sm:leading-[34px] sm:mb-5 sm:font-medium">
                        {t('PopularProductsTitle')}
                    </div>
                    <div className="grid grid-cols-4 gap-x-4 gap-y-10 lg:grid-cols-2 sm:gap-x-2 sm:gap-y-3">
                        {products.length > 0 && products.map(
                            (product) => (
                                <ProductSimple key={product.id} product={product}/>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default PopularProducts
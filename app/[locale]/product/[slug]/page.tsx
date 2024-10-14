import ProductData from "@/utils/data/productData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import SingleProduct from "@/components/singleProduct/singleProduct";
import RelatedProducts from "@/components/related/relatedProducts";

export default async function Product({params}: { params : { [key: string]: string }}) {
    const slug = params.slug
    const data = await ProductData(slug)
    return(
        <>
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            {data?.product && <SingleProduct productData={data.product}
                                             deliveryData={data.shippingMethods}
                                             paymentData={data.paymentMethods}/>}
            {data?.relatedProducts && <RelatedProducts products={data.relatedProducts}/>}
        </>
    )
}
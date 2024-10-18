import ProductData from "@/utils/data/productData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import SingleProduct from "@/components/singleProduct/singleProduct";
import RelatedProducts from "@/components/related/relatedProducts";
import {Metadata, ResolvingMetadata} from "next";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";


export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await fetch(`${GET_METADATA_ENDPOINT}/${params.slug}?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data.data)
}
export default async function Product({params}: { params : { [key: string]: string }}) {
    const slug = params.slug
    const data = await ProductData(slug)
    return(
        <>
            {data?.schema &&
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
                    />
                </>}
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            {data?.product && <SingleProduct productData={data.product}
                                             deliveryData={data.shippingMethods}
                                             paymentData={data.paymentMethods}/>}
            {data?.relatedProducts && <RelatedProducts products={data.relatedProducts}/>}
        </>
    )
}
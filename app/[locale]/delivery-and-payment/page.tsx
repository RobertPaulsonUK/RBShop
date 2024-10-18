import {Metadata, ResolvingMetadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import PageContent from "@/components/templates/pageContent";
import DeliveryAndPaymentPageData from "@/utils/data/pages/deliveryAndPaymentPageData";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";

export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await fetch(`${GET_METADATA_ENDPOINT}/delivery-and-payment?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data.data)
}
export default async function DeliveryAndPayment(searchParams) {
    const {params} = searchParams
    const pageData = await DeliveryAndPaymentPageData(params.locale)
    return (
        <>
            {pageData?.schema &&
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.schema) }}
                    />
                </>}
            {pageData?.breadcrumbs && <Breadcrumbs items={pageData.breadcrumbs}/>}
            {(pageData?.title && pageData.content) &&
                <PageContent content={pageData.content}/>}
        </>
    );
}
import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import PageContent from "@/components/templates/pageContent";
import DeliveryAndPaymentPageData from "@/utils/data/pages/deliveryAndPaymentPageData";

export const metadata: Metadata = {
    title: "Payment and Delivery",
    description: "Fast Woocommerce shop",
};
export default async function DeliveryAndPayment(searchParams) {
    const {params} = searchParams
    const pageData = await DeliveryAndPaymentPageData(params.locale)
    return (
        <>
            {pageData?.breadcrumbs && <Breadcrumbs items={pageData.breadcrumbs}/>}
            {(pageData?.title && pageData.content) &&
                <PageContent content={pageData.content}/>}
        </>
    );
}
import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GetAboutUsPageData from "@/utils/data/pages/aboutUsPageData";
import PageContent from "@/components/templates/pageContent";
import Brands from "@/components/brands/brands";
import GetPrivacyPolicyPageData from "@/utils/data/pages/privacyPolicePageData";
import DeliveryAndPaymentPageData from "@/utils/data/pages/deliveryAndPaymentPageData";

export const metadata: Metadata = {
    title: "Payment and Delivery",
    description: "Fast Woocommerce shop",
};
export default async function DeliveryAndPayment() {
    const pageData = await DeliveryAndPaymentPageData()
    return (
        <>
            {pageData?.breadcrumbs && <Breadcrumbs items={pageData.breadcrumbs}/>}
            {(pageData?.title && pageData.content) &&
                <PageContent content={pageData.content}/>}
        </>
    );
}
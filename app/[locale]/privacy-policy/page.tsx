import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GetAboutUsPageData from "@/utils/data/pages/aboutUsPageData";
import PageContent from "@/components/templates/pageContent";
import Brands from "@/components/brands/brands";
import GetPrivacyPolicyPageData from "@/utils/data/pages/privacyPolicePageData";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Fast Woocommerce shop",
};
export default async function PrivacyPolicy(searchParams) {
    const {params} = searchParams

    const pageData = await GetPrivacyPolicyPageData(params.locale)
    return (
        <>
            {pageData?.breadcrumbs && <Breadcrumbs items={pageData.breadcrumbs}/>}
            {(pageData?.title && pageData.content) &&
                <PageContent title={pageData.title}
                             content={pageData.content}/>}
        </>
    );
}
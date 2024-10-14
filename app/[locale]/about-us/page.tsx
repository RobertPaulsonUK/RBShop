import {Metadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GetAboutUsPageData from "@/utils/data/pages/aboutUsPageData";
import PageContent from "@/components/templates/pageContent";
import Brands from "@/components/brands/brands";

export const metadata: Metadata = {
    title: "About us",
    description: "Fast Woocommerce shop",
};
export default async function AboutUs() {
    const pageData = await GetAboutUsPageData()
    return (
        <>
            {pageData?.breadcrumbs && <Breadcrumbs items={pageData.breadcrumbs}/>}
            {(pageData?.title && pageData.content) &&
                <PageContent title={pageData.title}
                             content={pageData.content}/>}
            <Brands/>
        </>
    );
}
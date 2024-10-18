import {Metadata, ResolvingMetadata} from "next";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import GetAboutUsPageData from "@/utils/data/pages/aboutUsPageData";
import PageContent from "@/components/templates/pageContent";
import Brands from "@/components/brands/brands";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";

export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await fetch(`${GET_METADATA_ENDPOINT}/about-us?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data?.data)
}
export default async function AboutUs({params}) {
    const pageData = await GetAboutUsPageData(params.locale)
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
                <PageContent title={pageData.title}
                             content={pageData.content}/>}
            <Brands/>
        </>
    );
}
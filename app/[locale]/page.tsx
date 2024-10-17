import {Metadata, ResolvingMetadata} from "next";
import HomeNavigation from "@/components/home/navigation/homeNavigation";
import PopularProducts from "@/components/home/popularProducts/popularProducts";
import HomeContent from "@/components/home/content/homeContent";
import Brands from "@/components/brands/brands";
import HomeData from "@/utils/data/pages/homeData";
import HomeSlider from "@/components/home/homeSlider/homeSlider";
import SaleProduct from "@/components/home/product/saleProduct";
import {GET_METADATA_ENDPOINT} from "@/utils/constants/endpoints";
import {useMetadata} from "@/hooks/MetadataHook";
export async function generateMetadata(
    { params },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const data = await fetch(`${GET_METADATA_ENDPOINT}/home?lang=${params.locale}`).then((res) => res.json())
    return useMetadata(data)
}
export default async function Home({params}) {
    const data = await HomeData(params.locale)
    return (
        <>
            {data?.schema &&
                <>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
                    />
                </>}
            {data?.pageMenu && <HomeNavigation navItems={data.pageMenu}/>}
            {data?.saleProducts && (
                <HomeSlider>
                    {data.saleProducts.map((product,index) => (
                        <SaleProduct key={index} product={product} />
                    ))}
                </HomeSlider>
            )}
            {data?.popularProducts && <PopularProducts products={data.popularProducts}/>}
            {data?.content && <HomeContent content={data.content}/> }
            <Brands/>
        </>
    );
}



import {Metadata} from "next";
import ShopData from "@/utils/data/shopData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Products from "@/components/shop/products";
import FiltersData from "@/utils/data/filtersData";
import Filters from "@/components/filters/filters";
import Pagination from "@/components/shop/pagination/pagination";
import Brands from "@/components/brands/brands";
import ShopTitle from "@/components/shop/shopTitle";

export const metadata: Metadata = {
    title: "Shop",
};
export default async function Shop({searchParams}: { searchParams: { [key: string]: string } }) {
    const data = await ShopData(searchParams)
    const filtersData = await FiltersData()
    return(
        <>
            {data?.breadcrumbs && <Breadcrumbs items={data.breadcrumbs}/>}
            <section>
                <div className="container">
                    {data?.title && <ShopTitle title={data.title}/>}
                    <div className="flex items-start justify-start gap-[120px] lg:gap-8 relative">
                        {filtersData && <Filters attributes={filtersData.attributes} prices={filtersData.prices} categories={filtersData.categories} searchParams={searchParams}/> }
                        {data?.products && <Products products={data.products}/>}
                    </div>
                     {data?.pagination && <Pagination maxPages={data.pagination.max_pages} currentPage={data.pagination.current_page}/> }
                </div>
            </section>
            <Brands/>
        </>
    )
}
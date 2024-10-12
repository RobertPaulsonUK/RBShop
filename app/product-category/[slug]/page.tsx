import ShopData from "@/utils/data/shopData";
import FiltersData from "@/utils/data/filtersData";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Filters from "@/components/filters/filters";
import Products from "@/components/shop/products";
import Pagination from "@/components/shop/pagination/pagination";
import Brands from "@/components/brands/brands";
import ShopTitle from "@/components/shop/shopTitle";

export default async function Category({params,searchParams}: { params : { [key: string]: string },searchParams: { [key: string]: string } }) {

    const slug = params.slug
    const data = await ShopData(searchParams,slug)
    const filtersData = await FiltersData(slug)
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
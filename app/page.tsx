import {Metadata} from "next";
import HomeNavigation from "@/components/home/navigation/homeNavigation";
import PopularProducts from "@/components/home/popularProducts/popularProducts";
import HomeContent from "@/components/home/content/homeContent";
import Brands from "@/components/brands/brands";
import HomeData from "@/utils/data/pages/homeData";
import HomeSlider from "@/components/home/homeSlider/homeSlider";
import SaleProduct from "@/components/home/product/saleProduct";
import {GenerateRandomString} from "@/hooks/RandomStringHook";


export const metadata: Metadata = {
    title: "Strum",
    description: "Fast Woocommerce shop",
};
export default async function Home() {
    let data = await HomeData()
  return (
      <>
          {data?.pageMenu && <HomeNavigation navItems={data.pageMenu}/>}
          {data?.saleProducts && (
              <HomeSlider>
                  {data.saleProducts.map((product) => (
                      <SaleProduct key={product.id} product={product} />
                  ))}
              </HomeSlider>
          )}
          {data?.popularProducts && <PopularProducts products={data.popularProducts}/>}
          {data?.content && <HomeContent content={data.content}/> }
          <Brands/>
      </>
  );
}



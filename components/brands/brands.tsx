import BrandsData from "@/utils/data/brendsData";
import BrandItem from "@/components/brands/brandItem";

export default async function Brands () {
    const brands = await BrandsData()

    return(
        <>
            <section className="section py-[104px] sm:py-8">
                <div className="container">
                    <div className="flex justify-center items-center">
                        {brands && brands.length > 0 && brands.map(
                            (brand,index) => (
                                <BrandItem key={index} brand={brand}/>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
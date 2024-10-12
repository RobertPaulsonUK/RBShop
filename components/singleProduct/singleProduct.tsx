import {FC} from "react";
import {IMethodInterface, IProductInterface} from "@/types/singleProduct/product.interface";
import Tabs from "@/components/singleProduct/tabs/tabs";
import SingleAttributes from "@/components/singleProduct/attributes";
import AddToWishlist from "@/components/product/addToWishlist";
import SingleProductPrice from "@/components/singleProduct/price";
import SimpleAddToCart from "@/components/product/addToCart/simpleAddToCart";
import PaymentAndDelivery from "@/components/singleProduct/paymentAndDelivery/paymentAndDelivery";
import ProductGallery from "@/components/singleProduct/gallery/gallery";
import VariableAddToCart from "@/components/product/addToCart/variableAddToCart";

interface IInterface {
    productData : IProductInterface
    paymentData : IMethodInterface
    deliveryData : IMethodInterface
}
const SingleProduct:FC<IInterface> = ({productData,paymentData,deliveryData}) => {
    return(
        <>
            <section className="pb-[100px] sm:pb-6">
                <div className="container">
                    <div
                        className="flex items-start justify-center gap-[120px] xl:gap-7 lg:flex-col lg:items-center sm:gap-6">
                        <div className="w-1/2 lg:w-3/4 sm:w-full">
                            <div
                                className="text-[#333E48] text-[32px] leading-[34px] font-medium mb-10 hidden lg:block sm:text-[24px] sm:leading-[26px]">
                                {productData.name}
                            </div>
                            {productData.image && <ProductGallery mainImage={productData.image} galleryImages={productData?.gallery}/> }
                            <div className="lg:hidden">
                                <Tabs attributes={productData.attributes} content={productData.content ? productData.content : productData.description}/>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-3/4 sm:w-full">
                            <h1 className="text-[#333E48] text-[32px] leading-[34px] font-medium mb-10 lg:hidden">
                                {productData.name}
                            </h1>
                            <div
                                className="goods__item-details-price-wrapper mb-7 flex justify-between items-end relative sm:flex-col sm:items-start sm:gap-6">
                                <AddToWishlist id={productData.id} className={"goods__item-details-like absolute right-2 bottom-12 sm:bottom-[85px] sm:right-0"}/>
                                <SingleProductPrice regularPrice={productData.regularPrice}
                                                    isOnSale={productData.isOnSale}
                                                    salePrice={productData.salePrice}
                                                    currency={productData.currency}/>
                                {/*Buy*/}
                                {productData.type === 'simple' && <SimpleAddToCart
                                    id={productData.id}
                                    stockStatus={productData.stockStatus}
                                    stock={productData.stock}/>
                                }
                                {productData.type === 'variable' && <VariableAddToCart variations={productData.variations}/>
                                }
                            </div>
                            <SingleAttributes attributes={productData.attributes}/>
                            {paymentData && <PaymentAndDelivery data={paymentData}/>}
                            {deliveryData && <PaymentAndDelivery data={deliveryData}/>}
                            <div className="hidden lg:block mt-6">
                                <Tabs attributes={productData.attributes} content={productData.content ? productData.content : productData.description}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SingleProduct
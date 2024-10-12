import {FC} from "react";
interface IProductPrice {
    regularPrice : number | string
    isOnSale : boolean
    salePrice : number
    currency : string
}
const SingleProductPrice:FC<IProductPrice> = ({regularPrice,isOnSale,salePrice,currency}) => {
    return(
        <div>
            {(isOnSale && salePrice > 0) &&
                <div
                    className="goods__item-details-price-old text-lg font-normal text-center line-through text-[#AEAEAE] sm:text-[14px] sm:leading-[16px]">
                    {regularPrice + currency}
                </div>
            }
            <div
                className="goods__item-details-price text-[40px] leading-[44px] text-[#333E48] font-bold sm:text-[32px] sm:leading-[34px]">
                {salePrice ? salePrice : regularPrice}
                <span className="text-[12px] leading-[18px] text-[#333E48] font-bold">{currency}</span>
            </div>
        </div>
    )
}
export default SingleProductPrice
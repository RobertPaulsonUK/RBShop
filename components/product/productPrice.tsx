import {FC} from "react";
interface IProductPrice {
    regularPrice : number | string
    isOnSale : boolean
    salePrice : number
    currency : string
}

const ProductPrice:FC<IProductPrice> = ({regularPrice,isOnSale,salePrice,currency}) => {
    return(
            <div>
                {(isOnSale && salePrice > 0) &&
                    <div className="text-xs font-normal text-center line-through text-[#AEAEAE]">
                        {regularPrice + currency}
                    </div>
                }

                <div className="text-2xl text-[#333E48] font-bold">{salePrice > 0 ? salePrice : regularPrice}
                    <span className="text-xs text-[#333E48] font-bold">{currency}</span>
                </div>
            </div>
    )
}
export default ProductPrice
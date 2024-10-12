"use client"
import {FC} from "react";
import {useWishlist} from "@/hooks/WishlistHook";
import WishlistItem from "@/components/cabinet/wishlist/wishlistItem";
import WishlistEmpty from "@/components/cabinet/wishlist/wishlistEmpty";

const WishlistItems:FC<{activeIndex : number}> = ({activeIndex}) => {
    const {items} = useWishlist()
    const index = 3
    return(
        <div className={`cabinet__item min-w-[800px] h-full xl:min-w-full ${activeIndex === index ? 'active' : ''}`}>
            <div
                className={`goods__items active w-full grid grid-cols-3 gap-x-4 gap-y-10 xl:w-auto lg:grid-cols-2 md:mt-[88px] sm:gap-x-2 sm:gap-y-3 relative sm:mt-[0px] ${items.length === 0 ? 'h-full' : ''}`}>
                {
                    items.length > 0 ?
                        items.map((item,index) => (
                            <WishlistItem key={index} product={item}/>
                        ))
                    :
                        <WishlistEmpty/>

                }
            </div>
        </div>
    )
}
export default WishlistItems
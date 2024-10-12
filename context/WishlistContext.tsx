"use client"

import {createContext, FC, ReactNode, useEffect, useState} from "react";
import getWishlist from "@/utils/data/wishlist/getWishlist";
import AddToWishlistItem from "@/utils/data/wishlist/addToWishlist";
import RemoveFromWishlist from "@/utils/data/wishlist/removeFromWishlist";
import {IWishlistItem} from "@/types/wishlist/wishlist.interface";
import {useUser} from "@/hooks/UserHook";
import {useModals} from "@/hooks/ModalsHook";


interface IWishlistContext {
    items : IWishlistItem[]
    addToWishlist : (id : number) => void
    removeFromWishlist : (id : number) => void
    count : number
    checkIsInWishlist : (id : number) => void
}
export const WishlistContext = createContext<IWishlistContext | undefined>(undefined)

export const WishlistProvider:FC<{ children: ReactNode }> = ({children}) => {
    const {isLogged} = useUser()
    const [items,setItems] = useState([])
    const [count,setCount] = useState(0)
    const [arrayIds,setArrayIds] = useState([])
    const {modalsHandlers:{wishlistHandler}} = useModals()
    useEffect(() => {
        getWishlistItems()
    }, [isLogged]);
    useEffect(() => {
        updateArrayIds()
    }, [items]);
    const addToWishlist = async (id : number) => {
        const data = await AddToWishlistItem(id)
        if(data) {
            updateData(data)
            wishlistHandler()
        }

    }
    const removeFromWishlist = async (id : number) => {
        const data = await RemoveFromWishlist(id)
        if(data) {
            updateData(data)
        }
    }
    const getWishlistItems = async () => {
        if(!isLogged) {
            updateData([])
            return
        }
        const data = await getWishlist()
        if(data) {
            updateData(data)
        }
    }

    const updateData = (data) => {
        setItems(data)
        setCount(data.length)
    }
    const checkIsInWishlist = (id) => {
        return arrayIds.includes(id)
    }

    const updateArrayIds = () => {
        let array = []
        items.forEach(item => {
            array.push(item.id)
        })
        setArrayIds(array)
    }

    return(
        <WishlistContext.Provider
            value={{
                items,
                addToWishlist,
                removeFromWishlist,
                count,
                checkIsInWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    )
}
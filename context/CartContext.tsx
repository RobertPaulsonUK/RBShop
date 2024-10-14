"use client"
import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {ICartItemInterface} from "@/types/cart/cart.item.interface";
import {ICrossSellsInterface} from "@/types/cart/crosssels.interface";
import {useUser} from "@/hooks/UserHook";
import Cookies from "js-cookie";
import { CART_KEY_NAME} from "@/utils/constants/constants";
import GetCart from "@/utils/data/cart/getCart";
import AddTocArt from "@/utils/data/cart/addToCart";
import UpdateCartData from "@/utils/data/cart/updateCartItem";
import DeleteCartData from "@/utils/data/cart/deleteCartItem";
import {useModals} from "@/hooks/ModalsHook";

interface ICartInterface {
    cart : {
            items : ICartItemInterface[] | []
            cross_sells : ICrossSellsInterface[] | []
            count : number
            total : number
            }
    addToCartHandler : (id : number,quantity : number) => void
    updateCartItemHandler : (key : string,qty : number) => void
    removeFromCartHandler : (key : string) => void
    currency : string
    locale : string
    dataLoading : boolean
}
export const CartContext = createContext<ICartInterface | undefined>(undefined)

export const CartProvider:FC<{ children: ReactNode ,locale : string}> = ({ children ,locale}) => {
    const {modalsHandlers : {cartHandler}} = useModals()
    const {isLogged,getTokenFromCookies} = useUser()
    const [dataLoading,setDataLoading] = useState<boolean>(true)
    const [cart,setCart] = useState({
        items : [],
        cross_sells : [],
        count : 0,
        total : 0
    })
    const [cartCount,setCartCount] =useState<number>(0)
    useEffect(() => {
        setDataLoading(true)
        getCartItems()
    }, [isLogged]);

    const addToCartHandler = async (id: number,qty : number = 1) => {
        const token = getTokenFromCookies()
        let cartData = null
        if(!token) {
            const cartKey = getCartKey()
            cartData = await AddTocArt({cartKey : cartKey,productId : id,quantity : qty, locale})
        }
        if(token) {
            cartData = await AddTocArt({token : token,productId : id,quantity : qty, locale})
        }
        if(cartData) {
            setCart(cartData)
            cartHandler(true)
        }
    }
    const removeFromCartHandler = async (key : string) => {
        const token = getTokenFromCookies()
        let cartData = null
        if(!token) {
            const cartKey = getCartKey()
            cartData = await DeleteCartData({cartKey : cartKey,productKey : key, locale})
        }
        if(token) {
            cartData = await DeleteCartData({token : token,productKey : key, locale})
        }
        if(cartData) {
            setCart(cartData)
        }
    }
    const updateCartItemHandler = async (key: string,qty : number ) => {
        const token = getTokenFromCookies()
        let cartData = null
        if(!token) {
            const cartKey = getCartKey()
            cartData = await UpdateCartData({cartKey : cartKey,productKey : key,quantity : qty, locale})
        }
        if(token) {
            cartData = await UpdateCartData({token : token,productKey : key,quantity : qty, locale})
        }
        if(cartData) {
            setCart(cartData)
        }
    }

    const getCartItems = async () => {
        const token = getTokenFromCookies()
        let cartData = null
        if(!token) {
            const cartKey = getCartKey()
            cartData = await GetCart({cartKey : cartKey, locale})
        }
        if(token) {
            cartData = await GetCart({token : token, locale})
        }
        if(cartData) {
            setCart(cartData)
            setDataLoading(false)
        }
    }
    const getCartKey = () => {
        let key = Cookies.get(CART_KEY_NAME)
        if(!key) {
            key  = [...Array(16)]
                .map(() => Math.random().toString(36)[2])
                .join('');
            Cookies.set(CART_KEY_NAME, key, { expires: 7 })
        }

        return key
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCartHandler,
            removeFromCartHandler,
            updateCartItemHandler,
            currency : 'грн',
            locale,
            dataLoading
        }}>
            {children}
        </CartContext.Provider>
    )
}
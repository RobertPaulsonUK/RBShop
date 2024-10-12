"use client"
import {useContext} from "react";
import {WishlistContext} from "@/context/WishlistContext";
export  const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useModals must be used within a Wishlist Provider");
    }
    return context;
};
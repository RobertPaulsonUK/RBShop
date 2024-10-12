"use client"
import {FC, useEffect, useState} from "react";
import UserActions from "@/components/layouts/header/headerBottom/UserActions";
import {IBottomMenu} from "@/types/header.interface";
import BottomMenu from "@/components/layouts/header/headerBottom/categoryMenu/menu";
import CloseButton from "@/components/layouts/header/headerBottom/closeButton";
import SearchBar from "@/components/layouts/header/headerBottom/search/searchBar";
import axios from "axios";
import {SEARCH_AJAX_ENDPOINT} from "@/utils/constants/endpoints";
import {log} from "util";

interface IBottomMenuInterface {
    bottomMenu : IBottomMenu[]
}
const HeaderBottom:FC<IBottomMenuInterface> = ({bottomMenu}) => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen,setIsOpen] = useState(false)
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${SEARCH_AJAX_ENDPOINT}?s=${query}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const inputHandler = (value : string) => {
        setQuery(value)
        if (value.length <  2) {
            setProducts([]);
            return
        }
        fetchProducts()
    }





    return(
        <>
            <div className="flex justify-between items-center gap-[87px] px-6 lg:gap-6 lg:p-0">
                <div className={`header__pannel flex justify-end md:order-2 gap-2 duration-200 ${isOpen ? 'active' : ''}`}>
                    {/*User actions*/}
                    <UserActions showDefault={false}/>
                    {/*Category menu*/}
                    {bottomMenu.length && <BottomMenu menuItems={bottomMenu}/>}
                </div>
                {/*Close btn*/}
                <CloseButton isActive={isOpen} closeHandler={setIsOpen}/>
                {/*Searchbar*/}
                <SearchBar isOpen={isOpen}
                           setIsOpen={setIsOpen}
                           query={query}
                           setQuery={inputHandler}
                           products={products}/>
                {/*Icons*/}
                <UserActions showDefault={true}/>
            </div>
        </>
    )
}


export default HeaderBottom
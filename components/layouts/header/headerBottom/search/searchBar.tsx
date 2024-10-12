"use client"
import {FC} from "react";
import SearchIcon from "@/components/icons/searchIcon";
import SearchList from "@/components/layouts/header/headerBottom/search/searchList";
import Link from "next/link";
import {ISearchItemInterface} from "@/types/search.interface";

interface ISearchBar {
    query : string
    setQuery : (value : string) => void
    isOpen : boolean
    setIsOpen : (value : boolean) => void
    products : ISearchItemInterface[]
}
const SearchBar:FC<ISearchBar> = ({query,setQuery,isOpen,setIsOpen,products}) => {

    return(
        <>
            <form method={"GET"} action={"/shop"}  className={`header__search relative min-h-10 w-full pl-5 pr-[1px] flex items-center justify-between bg-[#F6F6F6] shadow_mod md:pl-0 md:w-[40px] md:h-[35px] md:duration-200 ${products.length > 0 ? 'rounded-[0]' : 'rounded-[48px]'} ${isOpen ? 'active' : ''}`}
                   id="search-input">

                <input
                    className={`search__inpt min-h-10 w-full bg-[#F6F6F6] duration-200 outline-none hover:placeholder:text-[#46B1F0] focus:text-black md:w-0 rounded-[48px] ${isOpen ? 'active' : ''}`}
                    type={"text"}
                    placeholder={"Пошук товарів"}
                    name={"s"}
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
                <button className={`${!isOpen ? 'md:hidden' : ''}`} type={"submit"}>
                    <SearchIcon isActive={isOpen}/>
                </button>
                <Link className={`hidden ${!isOpen ? 'md:block' : ''}`}
                      href={"#"}
                      onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(true)
                      }}
                >
                    <SearchIcon isActive={false}/>
                </Link>
                {products.length > 0 && <SearchList searchItems={products}/>}

            </form>
        </>
    )
}
export default SearchBar
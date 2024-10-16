import {FC} from "react";
import {ISearchInterface} from "@/types/search.interface";
import SearchItem from "@/components/layouts/header/headerBottom/search/searchItem";

const SearchList:FC<ISearchInterface> = ({searchItems}) => {
    return(
        <>
            <div className="active search_list absolute top-10 left-0 right-0 w-full z-30 bg-[#F6F6F6] opacity-0 invisible">
                {
                    searchItems && searchItems.length && searchItems.map(
                        (item,index) => (
                            <SearchItem key={index} title={item.title} url={item.url} imageUrl={item.imageUrl} id={item.id}/>
                        )
                    )
                }
            </div>
        </>
    )
}
export default SearchList
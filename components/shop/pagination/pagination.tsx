"use client"
import {FC} from "react";
import PrevElem from "@/components/shop/pagination/prevElem";
import NextElem from "@/components/shop/pagination/nextElem";
import PaginateLink from "@/components/shop/pagination/paginateLink";
import {useSearchParams} from "next/navigation";

const Pagination:FC<{currentPage : number,maxPages : number}> = ({currentPage,maxPages}) => {
    const searchParams = useSearchParams();
    const createPageLink = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        return `?${params.toString()}`;
    };

    return(
        <div className="flex items-center justify-end gap-5 mt-12 sm:justify-center">
            {currentPage !== 1 && <PrevElem url={createPageLink(currentPage - 1)}/>}

            {Array.from({ length: maxPages }, (_, index) => {
                const pageNumber = index + 1
                if (
                    pageNumber === 1 ||
                    pageNumber === maxPages ||
                    pageNumber === currentPage ||
                    Math.abs(pageNumber - currentPage) === 1
                ) {
                    return (
                        <PaginateLink key={pageNumber} page={pageNumber} url={createPageLink(pageNumber)} />
                    );
                }
                if (
                    Math.abs(pageNumber - currentPage) === 2
                ) {
                    return <p key={pageNumber} className={"text-base font-medium text-[#333E48]"}>...</p>;
                }
            })}

            {currentPage !== maxPages && <NextElem url={createPageLink(currentPage + 1)}/>}
        </div>
    )
}
export default Pagination
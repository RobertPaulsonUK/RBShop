import {FC} from "react";
import {ICatalog} from "@/types/footer.interface";
import CatalogItem from "@/components/layouts/footer/catalog/catalogItem";

interface IInterface {
    catalog : ICatalog
}
const Catalog:FC<IInterface> = ({catalog}) => {
    const {title,items} = catalog
    return(
        <>
            <div>
                <div className="text-base font-medium text-[#333E48] mb-5">{title}</div>
                <div className="flex justify-start items-start gap-[56px] lg:gap-7 md:flex-col md:gap-[0px]">
                    <ul>
                        {items.length > 0 && items.slice(0, 3).map(
                            ({link},index) => (
                                <CatalogItem key={index} link={link}/>
                            )
                        )}
                    </ul>
                    <ul>
                        {items.length > 3 && items.slice(3).map(
                            ({link},index) => (
                                <CatalogItem key={index} link={link}/>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Catalog
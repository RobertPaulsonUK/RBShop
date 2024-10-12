import {FC} from "react";
import {IOptionAttribute, IProductAttribute} from "@/types/products/product.full.interface";

const Attributes:FC<{items : IProductAttribute[]}> = ({items}) => {
    const getOptionsName = ({options} : {options : IOptionAttribute[]}) => {
        return options.map(option => option.name).join(', ')
    }

    return(
        <>
            <div className="goods__item-details-mini">
                {items.map(
                    ({name,options},index) => (
                        <div key={index} className="goods__item-details-mini-title">{name}:
                            <span>
                                {' ' + getOptionsName({options})}
                            </span>
                        </div>
                    )
                )}
            </div>
        </>
    )
}
export default Attributes
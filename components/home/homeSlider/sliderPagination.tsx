import {FC} from "react";

interface IPaginationInterface {
    itemsLength : number
    paginationHandler : (index : number) => void
    activeIndex : number
}
const SliderPagination:FC<IPaginationInterface> = ({itemsLength,paginationHandler,activeIndex}) => {
    return(
        <div className="slider-pagination">
            {Array.from({ length: itemsLength }, (_, index) => (
                <span className={`cursor-pointer ${activeIndex === index ? 'active-bullet' : ''}`} key={index} onClick={() => paginationHandler(index)}></span>
            ))}
        </div>
    )
}
export default SliderPagination
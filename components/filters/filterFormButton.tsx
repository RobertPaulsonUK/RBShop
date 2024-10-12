import {FC} from "react";

const FilterFormButton:FC = () => {
    return(
        <div className="md:sticky md:-bottom-2 md:-left-0 md:-right-0 md:bg-[#F6F6F6] md:p-3">
            <button
                type={"submit"}
                className="modal_btn_thank py-[10px] px-5 block rounded-[40px] bg-[#46B1F0] border-none cursor-pointer text-[#F6F6F6] text-sm font-medium hover:bg-[linear-gradient(90deg,#46B1F0_0%,#005BA9_100%)]  hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] duration-200 md:mx-auto md:w-full">
                Застосувати
            </button>
        </div>
    )
}
export default FilterFormButton
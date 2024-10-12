import { FC, ReactNode } from "react";

const GalleryWrapper: FC<{children: ReactNode,transformWidth : number}> = ({ children ,transformWidth}) => {

    return (
        <div className="product-slider-wrapper sm:mb-4"
             style={{
                 transform: `translateX(${transformWidth}px)`,
             }}
        >
            {children}
        </div>
    );
};

export default GalleryWrapper;
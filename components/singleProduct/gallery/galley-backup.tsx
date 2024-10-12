// "use client"
// import {FC,useState} from "react";
// import GallerySlide from "@/components/singleProduct/gallery/gallerySlide";
// import "./gallery-style.scss"
// import GalleryWrapper from "@/components/singleProduct/gallery/galleryWrapper";
// import GalleryMini from "@/components/singleProduct/gallery/galleryMini";
//
// interface IGallery {
//     mainImage : string
//     galleryImages? : string[]
// }
// const ProductGallery:FC<IGallery> = ({mainImage,galleryImages}) => {
//     const [startWidth,setStartWidth] = useState(0)
//     const readyGallery = [mainImage, ...galleryImages]
//     const setCurrentTranslateWidth = (index) => {
//         let slideWidth = document.querySelector('.product-slider-wrapper').clientWidth
//         let newWidth = slideWidth * index
//         setStartWidth(-(newWidth))
//     }
//
//     return(
//         <>
//             <div className={"product-slider good__slider mySwiper2 sm:mb-4"}>
//                 <GalleryWrapper transformWidth={startWidth}>
//                     {readyGallery.length > 0 && readyGallery.map(
//                         (item,index) => (
//                             <GallerySlide src={item}
//                                           key={index}
//                                           index={index + 1}/>
//                         )
//                     )}
//                 </GalleryWrapper>
//             </div>
//             <GalleryMini galleryItems={readyGallery} clickHandler={setCurrentTranslateWidth}/>
//         </>
//     )
// }
// export default ProductGallery
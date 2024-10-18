import {SeoInterface} from "@/types/seo.interface";

export const useMetadata = (metadata : SeoInterface | undefined) => {
    if(!metadata) {
        return {}
    }
    const ogImage = metadata.og_images ? [
        {
            url: metadata.og_images.url,
            width: metadata.og_images.width,
            height: metadata.og_images.height,
            alt: metadata.title
        }
    ] : []

    return {
        title: metadata.title,
        description : metadata.description,
        openGraph : {
            locale : metadata.og_locale,
            type : metadata.og_type,
            title : metadata.og_title,
            description : metadata.og_description,
            url : metadata.og_url,
            site_name : metadata.og_site_name,
            images : ogImage
        },
        other : {
            canonical : metadata.canonical
        },
    }
}
export interface SeoInterface {
    title: string
    description: string
    canonical: string
    og_locale: string
    og_type: string
    og_title: string
    og_description: string
    og_url: string
    og_site_name: string
    article_publisher: string
    article_author: string
    article_published_time: string
    article_modified_time: string
    og_images: OgImages
    twitter_card: string
    twitter_creator: string
    twitter_site: string
}
export interface OgImages {
    width: number
    height: number
    filesize: number
    url: string
    path: string
    size: string
    id: string
    alt: string
    pixels: number
    type: string
}
export interface Schema {
    "@context": string
    "@graph": []
}
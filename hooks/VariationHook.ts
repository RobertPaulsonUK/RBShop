import {IProductVariation} from "@/types/products/product.full.interface";
interface IVariationAttribute {
    slug: string;
    name: string;
    options: IAttributeOption[];
}
interface IAttributeOption {
    name: string;
    slug: string;
}
export const getVariationsAttributesSummary = (variations : IProductVariation[]):IVariationAttribute[] => {
    const attributesMap = {};
    variations.forEach((variation) => {
        variation.attributes.forEach((attribute) => {
            if (!attributesMap[attribute.slug]) {
                attributesMap[attribute.slug] = {
                    name: attribute.name,
                    options: [],
                };
            }
            attribute.options.forEach((option) => {
                if (!attributesMap[attribute.slug].options.some((opt) => opt.slug === option.slug)) {
                    attributesMap[attribute.slug].options.push(option);
                }
            });
        });
    });

    return Object.entries(attributesMap).map(([slug, data]) => ({
        slug,
        name: data.name,
        options: data.options,
    }));
};
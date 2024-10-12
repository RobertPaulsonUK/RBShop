export interface ISearchInterface {
    searchItems : ISearchItemInterface[]
}
export interface ISearchItemInterface {
    id : number
    title : string
    url : string
    imageUrl : string
}
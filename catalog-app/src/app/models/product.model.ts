import { Rating } from "./rating.model"

export interface Product{
    id:number
    title:string
    price:number
    category:string
    image:string
    rating:Rating
}
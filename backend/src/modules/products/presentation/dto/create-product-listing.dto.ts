import { IsNotEmpty, IsString } from "class-validator";

export class CreateProductListingDto{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    description:string

    @IsString()
    @IsNotEmpty()
    priceInCents:number

    @IsString()
    @IsNotEmpty()
    sellerId:string

    @IsString()
    @IsNotEmpty()
    categoryId:string
}
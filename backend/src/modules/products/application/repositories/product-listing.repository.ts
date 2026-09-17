import { ProductListing } from "../../domain/entities/product-listing.entity.js";

export abstract class ProductListingRepository{
    abstract create(productListing:ProductListing):Promise<void>
    abstract findAll():Promise<ProductListing[]>
}
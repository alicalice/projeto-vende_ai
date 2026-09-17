import { Inject } from "@nestjs/common";
import { ProductListingRepository } from "../application/repositories/product-listing.repository.js";
import { CreateProductListingData, ProductListing } from "../domain/entities/product-listing.entity.js";

export class CreateProductListingUseCase{

    constructor(
        @Inject(ProductListingRepository)
        private productListingRepository:ProductListingRepository
    ){}

    
    async execute(data:CreateProductListingData):Promise<ProductListing>{
        
        const listing = ProductListing.create(data)

        await this.productListingRepository.create(listing)

        return listing;
    }

    
}
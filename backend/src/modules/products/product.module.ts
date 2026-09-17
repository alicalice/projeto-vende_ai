import { Module } from "@nestjs/common";
import { ProductListingController } from "./presentation/controller/product-listing.controller.js";
import { ProductListingRepository } from "./application/repositories/product-listing.repository.js";
import { ProductListingTypeOrmReposiotory } from "./infra/repositories/product-listing-tyoerm.repository.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductListingSchema } from "./infra/database/typeorm/entities/product-listing-schema.js";
import { CreateProductListingUseCase } from "./use-cases/create-product-listing.use-case.js";
import { FindaAllProductListingsUseCase } from "./use-cases/find-all-product-listings.use-case.js";

@Module({

    imports:[
        TypeOrmModule.forFeature([
            ProductListingSchema
        ])
    ],
    controllers:[ProductListingController],


    providers:[

        CreateProductListingUseCase,
        FindaAllProductListingsUseCase,

        {
            provide:ProductListingRepository,
            useClass:ProductListingTypeOrmReposiotory
    },
        CreateProductListingUseCase,

    ],
    exports:[
        ProductListingRepository
    ]
})

export class ProductsModule{}
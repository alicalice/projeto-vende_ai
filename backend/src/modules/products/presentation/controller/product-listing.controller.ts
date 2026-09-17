import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductListingDto } from "../dto/create-product-listing.dto.js";
import { CreateProductListingUseCase } from "../../use-cases/create-product-listing.use-case.js";
import { FindaAllProductListingsUseCase } from "../../use-cases/find-all-product-listings.use-case.js";


@Controller('products')
export class ProductListingController{
    constructor(
        private readonly createProductListingUseCase: CreateProductListingUseCase,
        private readonly findAllProductListingCase: FindaAllProductListingsUseCase
    ){}

    @Post()
    create(@Body() body: CreateProductListingDto){
        return this.createProductListingUseCase.execute(body)
    }

    @Get()
    async findAll(){
        return this.findAllProductListingCase.execute()
    }
}
import { ProductListing } from "../src/modules/products/domain/entities/product-listing.entity.js"
import { InMemoryProductListingRepository } from "../src/modules/products/infra/repositories/in-memory-product-listing.repository.js"

describe('InMemoryProductLitingRepository',(()=>{
    it('deve salvar um anuncio',async ()=>{
        const repository = new InMemoryProductListingRepository()

        const listing = ProductListing.create({
            title:"Bicicleta Caloi",
            description:"Bicicleta usada em ótimo estado.",
            priceInCents:50000,
            sellerId:"seller-1",
            categoryId:"category"
        })

        await repository.create(listing);

        expect(repository.items).toHaveLength(1);
        expect(repository.items[0]).toBe(listing);
    })
}))
import { ProductListingRepository } from "../src/modules/products/application/repositories/product-listing.repository.js"
import { ProductListing } from "../src/modules/products/domain/entities/product-listing.entity.js"
import { FindaAllProductListingsUseCase } from "../src/modules/products/use-cases/find-all-product-listings.use-case.js"

describe('Find all product listings',()=>{
    it('deve retornar todos os produtos',async ()=>{
        const productListingRepository = {
            
            findAll: async () =>[
                {
                
                    id:1,
                    title:"Moto Edge 70 Pro",
                    description:"Celularzão maneiro",
                    priceInCents:350000,
                    sellerId:"seller-1",
                    categoryId:"category",
                    status:'AVAILABLE'
                
            }  
        ]
        }as unknown as ProductListingRepository
        
        const sut = new FindaAllProductListingsUseCase(
                productListingRepository
            )

            const result = await sut.execute()

            expect(result).toHaveLength(1);
            expect(result[0].title).toBe('Moto Edge 70 Pro');
    })
})
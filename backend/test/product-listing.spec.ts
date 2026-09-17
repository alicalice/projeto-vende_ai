import { ProductListing, ProductListingStatus } from "../src/modules/products/domain/entities/product-listing.entity.js"

describe("ProductListing",()=>{
    it("não deve permitir anuncio sem titulo",()=>{
        expect(()=>
        ProductListing.create({
            title:"",
            description:"Bicicleta Usada",
            priceInCents:50000,
            sellerId:"seller-1",
            categoryId:"category"

        }),
        ).toThrow("O título do anuncio é obrigatório.")
    })

    it("deve criar um anúncio válido",()=>{
        const listing = ProductListing.create({
            title:"Bicicleta Caloi",
            description:"Bicicleta usada em ótimo estado.",
            priceInCents:50000,
            sellerId:"seller-1",
            categoryId:"category"
        })

        expect(listing).toBeInstanceOf(ProductListing)
    }
    );

    it("deve iniciar com status AVAIABLE",()=>{
        const listing = ProductListing.create({
            title:"Bicicleta Caloi",
            description:"Bicicleta usada em ótimo estado.",
            priceInCents:50000,
            sellerId:"seller-1",
            categoryId:"category"
        })

        expect(listing.status).toBe('AVAILABLE');
    })

    it("não deve permitir preço negativo",()=>{
        expect(()=>
        ProductListing.create({
            title:"Bike",
            description:"Bicicleta Usada",
            priceInCents:-100,
            sellerId:"seller-1",
            categoryId:"category"

        }),
        ).toThrow("O preço não pode ser negativo.")
    });

    it("não deve ser descrição vazia",()=>{
        expect(()=>
        ProductListing.create({
            title:"Bike",
            description:"",
            priceInCents:500,
            sellerId:"seller-1",
            categoryId:"category"

        }),
        ).toThrow("A descrição do anuncio é obrigatória.")
    });

    it("deve ter vendedor",()=>{
        expect(()=>
        ProductListing.create({
            title:"Bike",
            description:"Bicicleta seminova",
            priceInCents:500,
            sellerId:"",
            categoryId:"category"

        }),
        ).toThrow("O vendedor é obrigatório.")
    });

    it("não deve ser categoria vazia",()=>{
        expect(()=>
        ProductListing.create({
            title:"Bike",
            description:"Bicicleta seminova",
            priceInCents:500,
            sellerId:"seller-1",
            categoryId:""

        }),
        ).toThrow("A categoria é obrigatória.")
    });

    it("deve marcar o anuncio como vendido",()=>{
        const listing = ProductListing.create({
            title:"Bike",
            description:"Bicicleta Usada",
            priceInCents:1000,
            sellerId:"seller-1",
            categoryId:"category"
        })

        listing.markAsSold();

        expect(listing.status).toBe(ProductListingStatus.SOLD)
    })

})
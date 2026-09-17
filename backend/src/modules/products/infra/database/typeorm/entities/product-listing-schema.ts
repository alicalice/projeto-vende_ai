import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { ProductListingStatus } from "../../../../domain/entities/product-listing.entity.js"
@Entity('product_listings')
export class ProductListingSchema{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title:string

    @Column()
    description:string

    @Column()
    priceInCents:number

    @Column()
    sellerId:string

    @Column()
    categoryId:string

    @Column({
        type:'enum',
        enum:ProductListingStatus
    })
    status:ProductListingStatus
}
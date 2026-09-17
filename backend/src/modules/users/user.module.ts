import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserSchema } from "../products/infra/database/typeorm/entities/user-schema.js";
import { CreateUserUseCase } from "../products/use-cases/create-user.use-case.js";
import { UserRepository } from "../products/application/repositories/user.repository.js";
import { UserTypeOrmRepository } from "../products/infra/repositories/user-typeorm.repository.js";

@Module({
    imports:[
        TypeOrmModule.forFeature([UserSchema])
    ],
    controllers:[],

    providers:[
        CreateUserUseCase,

        {
            provide:UserRepository,
            useClass:UserTypeOrmRepository
        },

    ],
    exports:[
        UserRepository
    ]
})
export class UserModules{}
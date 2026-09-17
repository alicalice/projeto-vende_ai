import { UserRepository } from "../application/repositories/user.repository.js";
import { CreateUserData, User } from "../domain/entities/user.entity.js";
import bcrypt from 'bcrypt'
export class CreateUserUseCase{

    constructor(
        private readonly userRepository: UserRepository
    ){}


    async execute(data:CreateUserData):Promise<User>{

        const hashedPassword = await bcrypt.hash(data.password, 10)

        const user = User.create({
            ...data,
            password: hashedPassword
        })

        await this.userRepository.create(user)

        return user;
    }
}
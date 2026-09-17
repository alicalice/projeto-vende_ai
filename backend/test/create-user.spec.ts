import { UserRepository } from "../src/modules/products/application/repositories/user.repository.js";
import { User } from "../src/modules/products/domain/entities/user.entity.js";
import { CreateUserUseCase } from "../src/modules/products/use-cases/create-user.use-case.js";

class fakeUserRepository implements UserRepository{

    users: User[] = []
    async create(user:User):Promise<void>{
        this.users.push(user)
    }
}

describe('Criar usuario',()=>{
    it('deve criar usuario', async ()=>{

        const userRepository = new fakeUserRepository()

        const userCase = new CreateUserUseCase(userRepository)

        const user = await userCase.execute({
            name:'Alice',
            email:"alice@gmail.com",
            password:"977967",
            phone:"8791211221"
        })

        expect(user.name).toBe("Alice");
        expect(user.email).toBe("alice@gmail.com")

        expect(userRepository.users).toHaveLength(1);
        expect(userRepository.users[0].email).toBe('alice@gmail.com')
    })
})
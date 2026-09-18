
import { User } from '../src/modules/products/domain/entities/user.entity.js'

describe('User', () => {

  it('deve criar um usuário válido', () => {
    const user = User.create({
      name: 'Gustavo',
      email: 'gustavo@email.com',
      password: '123456',
      phone: '87999999999',
    })

    expect(user.name).toBe('Gustavo')
    expect(user.email).toBe('gustavo@email.com')
  })

  it('deve impedir usuário sem nome', () => {
    expect(() =>
      User.create({
        name: '   ',
        email: 'gustavo@email.com',
        password: '123456',
        phone: '87999999999',
      }),
    ).toThrow('O nome é obrigatorio')
  })

  it('deve impedir usuário sem email', () => {
    expect(() =>
      User.create({
        name: 'Gustavo',
        email: '   ',
        password: '123456',
        phone: '87999999999',
      }),
    ).toThrow('O email é obrigatorio')
  })
})

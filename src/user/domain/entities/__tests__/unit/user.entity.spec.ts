import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'

describe('UserEntity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
    }

    sut = new UserEntity(props)
  })

  it('should create a new UserEntity instance', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })
})

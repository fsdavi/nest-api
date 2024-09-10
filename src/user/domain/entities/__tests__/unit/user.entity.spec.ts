import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/user/domain/testing/helpers/user-data-builder'

describe('UserEntity', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})

    sut = new UserEntity(props)
  })

  it('should create a new UserEntity instance', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should return the name', () => {
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toEqual('string')
  })

  it('should return the email', () => {
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toEqual('string')
  })

  it('should return the password', () => {
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toEqual('string')
  })

  it('should return the createdAt', () => {
    expect(sut.createdAt).toEqual(props.createdAt)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})

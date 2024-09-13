import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  stubProp: string
}

class StubEntity extends Entity<StubProps> {}

describe('Abstract Entity unit tests', () => {
  const STUB_PROPS = { stubProp: 'stub' }
  const VALID_UUID = 'a297aa70-e77a-49ea-af1f-03fa6681bc71'

  it('should set props and id', () => {
    const entity = new StubEntity(STUB_PROPS)

    expect(entity.props).toStrictEqual(STUB_PROPS)
    expect(entity._id).toBeDefined()
    expect(uuidValidate(entity.id)).toBe(true)
  })

  it('should accept a valida uuid', () => {
    // uuid generated from a online UUID generator
    const entity = new StubEntity(STUB_PROPS, VALID_UUID)

    expect(entity._id).toStrictEqual(VALID_UUID)
  })

  it('should convert a entity to a JSON', () => {
    const entity = new StubEntity(STUB_PROPS, VALID_UUID)

    expect(entity.toJSON()).toStrictEqual({
      id: VALID_UUID,
      ...STUB_PROPS,
    })
  })
})

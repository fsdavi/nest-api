import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from '../../env-config.service'
import { EnvConfigModule } from '../../env-config.module'

type ExpectedConfig = {
  port: number
  nodeEnv: string
}

const EXPECTED_CONFIG: ExpectedConfig = {
  port: 3000,
  nodeEnv: 'test',
}

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [EnvConfigService],
    }).compile()

    sut = module.get<EnvConfigService>(EnvConfigService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('should return the PORT env variable', () => {
    expect(sut.getAppPort()).toBe(EXPECTED_CONFIG.port)
  })

  it('should return the NODE_ENV env variable', () => {
    expect(sut.getNodeEnv()).toBe(EXPECTED_CONFIG.nodeEnv)
  })
})

import { Test, TestingModule } from '@nestjs/testing';
import { CharacterMapResolver } from './character-map.resolver';

describe('CharacterMapResolver', () => {
  let resolver: CharacterMapResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterMapResolver],
    }).compile();

    resolver = module.get<CharacterMapResolver>(CharacterMapResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

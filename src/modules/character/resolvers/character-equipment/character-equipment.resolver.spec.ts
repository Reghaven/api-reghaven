import { Test, TestingModule } from '@nestjs/testing';
import { CharacterEquipmentResolver } from './character-equipment.resolver';

describe('CharacterEquipmentResolver', () => {
  let resolver: CharacterEquipmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterEquipmentResolver],
    }).compile();

    resolver = module.get<CharacterEquipmentResolver>(CharacterEquipmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

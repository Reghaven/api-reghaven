import { Test, TestingModule } from '@nestjs/testing';
import { EquippableAssetResolver } from './equippable-asset.resolver';

describe('EquippableAssetResolver', () => {
  let resolver: EquippableAssetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquippableAssetResolver],
    }).compile();

    resolver = module.get<EquippableAssetResolver>(EquippableAssetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

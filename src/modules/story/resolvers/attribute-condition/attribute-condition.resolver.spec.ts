import { Test, TestingModule } from '@nestjs/testing';
import { AttributeConditionResolver } from './attribute-condition.resolver';

describe('AttributeConditionResolver', () => {
  let resolver: AttributeConditionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeConditionResolver],
    }).compile();

    resolver = module.get<AttributeConditionResolver>(AttributeConditionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

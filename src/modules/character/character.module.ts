import { Module } from '@nestjs/common';
import { CharacterResolver } from './resolvers/character/character.resolver';

@Module({
  providers: [CharacterResolver]
})
export class CharacterModule {}

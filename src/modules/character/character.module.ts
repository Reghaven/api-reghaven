import { Module } from '@nestjs/common';
import {
	CharacterResolver,
} from './resolvers/character/character.resolver';
import { CharacterMapResolver } from './resolvers/character-map/character-map.resolver';

@Module({
	providers: [CharacterResolver, CharacterMapResolver],
})
export class CharacterModule {}

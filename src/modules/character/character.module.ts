import { Module } from '@nestjs/common';
import {
	CharacterResolver,
	CharacterMapModelResolver,
} from './resolvers/character/character.resolver';

@Module({
	providers: [CharacterMapModelResolver, CharacterResolver],
})
export class CharacterModule {}

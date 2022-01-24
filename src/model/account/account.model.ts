import { Field, ObjectType } from '@nestjs/graphql';
import { Character } from 'lib-storyteller';
import { CharacterModel } from '../character/character.model';

@ObjectType()
export class AccountModel {
	@Field((type) => Number)
	id: number;
	@Field((type) => String)
	uuid: string;
	@Field((type) => String)
	username: string;
	@Field((type) => String)
	email_address: string;
	@Field((type) => String)
	password: string;
	@Field((type) => [CharacterModel])
	character: Character[];
}

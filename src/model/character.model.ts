import { Field, ObjectType } from '@nestjs/graphql';
import {
	AssetInstance,
	Attribute,
	Character,
	CharacterEquipment,
	CharacterMap,
} from 'lib-storyteller';

@ObjectType()
export class CharacterModel implements Character {
	@Field((type) => String)
	uuid: string;
	assetInstances: AssetInstance[];
	attributes: Attribute[];
	equipment: CharacterEquipment;
	map: CharacterMap;
}

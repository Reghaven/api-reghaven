import { Field, ObjectType } from '@nestjs/graphql';
import {
	AssetInstance,
	Attribute,
	Character,
	CharacterEquipment,
	CharacterMap,
} from 'lib-storyteller';
import { AttributeModel } from './attribute.model';
import { AssetInstanceModel } from './asset-instance.model';
import { CharacterEquipmentModel } from './character-equipment.model';
import { CharacterMapModel } from './character-map.model';

@ObjectType()
export class CharacterModel implements Character {
	@Field((type) => String)
	uuid: string;
	@Field((type) => [AssetInstanceModel])
	assetInstances: AssetInstance[];
	@Field((type) => [AttributeModel])
	attributes: Attribute[];
	@Field((type) => CharacterEquipmentModel)
	equipment: CharacterEquipment;
	@Field((type) => CharacterMapModel)
	map: CharacterMap;
}

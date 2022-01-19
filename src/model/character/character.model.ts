import { Field, ObjectType } from '@nestjs/graphql';
import {
	AssetInstance,
	Character,
	CharacterEquipment,
	CharacterMap,
} from 'lib-storyteller';
import { AssetInstanceModel } from './asset-instance.model';
import { CharacterEquipmentModel } from './character-equipment.model';
import { CharacterMapModel } from './character-map.model';
import { CharacterAttributeModel } from './character-attribute.model';
import { CharacterAttribute } from 'lib-storyteller/dist/model/attribute/character-attribute.entity';

@ObjectType()
export class CharacterModel implements Character {
	@Field((type) => String)
	uuid: string;
	@Field((type) => [AssetInstanceModel])
	assetInstances: AssetInstance[];
	@Field((type) => [CharacterAttributeModel])
	attributes: CharacterAttribute[];
	@Field((type) => CharacterEquipmentModel)
	equipment: CharacterEquipment;
	@Field((type) => CharacterMapModel)
	map: CharacterMap;
}

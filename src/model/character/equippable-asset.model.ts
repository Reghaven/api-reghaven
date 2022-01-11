import {
	AssetType,
	BodyPart,
	EquipEffect,
	EquippableAsset,
} from 'lib-storyteller';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { EquipEffectModel } from './equip-effect.model';

registerEnumType(BodyPart, { name: 'BodyPart' });

@ObjectType()
export class EquippableAssetModel implements EquippableAsset {
	@Field((type) => [EquipEffectModel])
	effects: EquipEffect[];
	@Field((type) => BodyPart)
	forBodyPart: BodyPart;
	@Field((type) => String)
	name: string;
	@Field((type) => AssetType)
	type: AssetType.Equippable;
	@Field((type) => String)
	uuid: string;
}

import { Field, ObjectType } from '@nestjs/graphql';
import { CharacterEquipment } from 'lib-storyteller';
import { EquippableAsset } from 'lib-storyteller/src/model/asset/asset.entity';
import { EquippableAssetModel } from './equippable-asset.model';

@ObjectType()
export class CharacterEquipmentModel implements CharacterEquipment {
	@Field((type) => EquippableAssetModel, { nullable: true })
	head?: EquippableAsset;
	@Field((type) => EquippableAssetModel, { nullable: true })
	body?: EquippableAsset;
	@Field((type) => EquippableAssetModel, { nullable: true })
	wrist?: EquippableAsset;
	@Field((type) => EquippableAssetModel, { nullable: true })
	necklace?: EquippableAsset;
	@Field((type) => EquippableAssetModel, { nullable: true })
	shoes?: EquippableAsset;
}

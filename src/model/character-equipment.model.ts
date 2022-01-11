import { Field, ObjectType } from '@nestjs/graphql';
import { CharacterEquipment } from 'lib-storyteller';
import { EquippableAsset } from 'lib-storyteller/src/model/asset/asset.entity';
import { EquippableAssetModel } from './equippable-asset.model';

@ObjectType()
export class CharacterEquipmentModel implements CharacterEquipment {
	@Field((type) => EquippableAssetModel)
	head?: EquippableAsset;
	@Field((type) => EquippableAssetModel)
	body?: EquippableAsset;
	@Field((type) => EquippableAssetModel)
	wrist?: EquippableAsset;
	@Field((type) => EquippableAssetModel)
	necklace?: EquippableAsset;
	@Field((type) => EquippableAssetModel)
	shoes?: EquippableAsset;
}

import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CharacterEquipmentModel } from '../../../../model/character/character-equipment.model';
import { EquippableAssetModel } from '../../../../model/character/equippable-asset.model';
import { CharacterMapModel } from '../../../../model/character/character-map.model';
import { EquipEffectModel } from '../../../../model/character/equip-effect.model';
import { AssetType, BodyPart, EquipEffectType } from 'lib-storyteller';

@Resolver((of) => CharacterEquipmentModel)
export class CharacterEquipmentResolver {
	@ResolveField('head', (returns) => EquippableAssetModel)
	public head(
		@Parent() characterMap: CharacterMapModel,
	): Partial<EquippableAssetModel> {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '483c1e4a-12f7-4914-b832-0e8516f927ce';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		return {
			type: AssetType.Equippable,
			uuid: 'd7e5686c-e75b-4f50-bf83-1647a0ca2033',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
		};
	}

	@ResolveField('body', (returns) => EquippableAssetModel)
	public body(
		@Parent() characterMap: CharacterMapModel,
	): Partial<EquippableAssetModel> {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '483c1e4a-12f7-4914-b832-0e8516f927ce';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		return {
			type: AssetType.Equippable,
			uuid: 'd7e5686c-e75b-4f50-bf83-1647a0ca2033',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
		};
	}

	@ResolveField('wrist', (returns) => EquippableAssetModel)
	public wrist(
		@Parent() characterMap: CharacterMapModel,
	): Partial<EquippableAssetModel> {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '483c1e4a-12f7-4914-b832-0e8516f927ce';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		return {
			type: AssetType.Equippable,
			uuid: 'd7e5686c-e75b-4f50-bf83-1647a0ca2033',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
		};
	}

	@ResolveField('necklace', (returns) => EquippableAssetModel)
	public necklace(
		@Parent() characterMap: CharacterMapModel,
	): Partial<EquippableAssetModel> {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '483c1e4a-12f7-4914-b832-0e8516f927ce';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		return {
			type: AssetType.Equippable,
			uuid: 'd7e5686c-e75b-4f50-bf83-1647a0ca2033',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
		};
	}

	@ResolveField('shoes', (returns) => EquippableAssetModel)
	public shoes(
		@Parent() characterMap: CharacterMapModel,
	): Partial<EquippableAssetModel> {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '483c1e4a-12f7-4914-b832-0e8516f927ce';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		return {
			type: AssetType.Equippable,
			uuid: 'd7e5686c-e75b-4f50-bf83-1647a0ca2033',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
		};
	}
}

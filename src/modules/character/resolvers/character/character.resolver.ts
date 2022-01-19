import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CharacterModel } from '../../../../model/character/character.model';
import { CharacterMapModel } from '../../../../model/character/character-map.model';
import { AssetType } from 'lib-storyteller';
import { AttributeModel } from '../../../../model/character/attribute.model';
import { CharacterEquipmentModel } from '../../../../model/character/character-equipment.model';
import { AssetInstanceModel } from '../../../../model/character/asset-instance.model';
import { CharacterAttribute } from 'lib-storyteller/dist/model/attribute/character-attribute.entity';
import { CharacterAttributeModel } from '../../../../model/character/character-attribute.model';

@Resolver((of) => CharacterModel)
export class CharacterResolver {
	@Query((returns) => CharacterModel)
	public character(
		@Args('uuid', { type: () => String }) uuid: string,
	): Partial<CharacterModel> {
		const character = new CharacterModel();
		character.uuid = uuid;
		return character;
	}

	@ResolveField('map', (returns) => CharacterMapModel)
	public characterMap(@Parent() characterModel: CharacterModel) {
		const characterMapModel = new CharacterMapModel();
		characterMapModel.id = 3;
		return characterMapModel;
	}

	@ResolveField('attributes', (returns) => [AttributeModel])
	public attributes(
		@Parent() characterModel: CharacterModel,
	): CharacterAttributeModel[] {
		return [
			{
				attribute: {
					uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
					name: 'Strength',
				},
				pointsCollected: 1,
			},
			{
				attribute: {
					uuid: '2741c9f2-33de-4461-8d7d-e2ac90d76249',
					name: 'Intelligence',
				},
				pointsCollected: 1,
			},
		];
	}

	@ResolveField('equipment', (returns) => CharacterEquipmentModel)
	public equipment(): Partial<CharacterEquipmentModel> {
		return new CharacterEquipmentModel();
	}

	@ResolveField('assetInstances', (returns) => [AssetInstanceModel])
	assetInstances(): Partial<AssetInstanceModel>[] {
		return [
			{
				count: 100,
				asset: {
					uuid: '6064cd9e-7c32-464c-985e-a4e286fe8a2f',
					name: 'Shinies',
					type: AssetType.Normal,
				},
			},
		];
	}
}

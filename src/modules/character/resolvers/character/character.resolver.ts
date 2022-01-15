import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {CharacterModel} from '../../../../model/character/character.model';
import {CharacterMapModel} from '../../../../model/character/character-map.model';
import {AssetType, BodyPart, EquipEffectType} from "lib-storyteller";
import {AttributeModel} from "../../../../model/character/attribute.model";
import {CharacterEquipmentModel} from "../../../../model/character/character-equipment.model";
import {AssetInstanceModel} from "../../../../model/character/asset-instance.model";
import {EquipEffectModel} from "../../../../model/character/equip-effect.model";

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
	
	@ResolveField('attributes', returns => [AttributeModel])
	public attributes(
		@Parent() characterModel: CharacterModel
	): AttributeModel[] {
		return [
			{
				uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
				name: 'Strength',
				pointsCollected: 1,
			},
			{
				uuid: '2741c9f2-33de-4461-8d7d-e2ac90d76249',
				name: 'Intelligence',
				pointsCollected: 1,
			},
		];
	}
	
	@ResolveField('equipment', returns => CharacterEquipmentModel)
	public equipment(): Partial<CharacterEquipmentModel> {
		const characterEquipment = new CharacterEquipmentModel();
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '7b0ca8ff-0276-4029-b735-dc3045414817';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: 'e1efd2f1-48cc-474d-a36e-9289126aa2eb',
			name: 'Strength',
			pointsCollected: 1,
		};
		characterEquipment.head = {
			type: AssetType.Equippable,
			uuid: '1dbf83c3-2ac6-40f3-83df-b4d2acbcc073',
			name: 'A silly Helmet',
			forBodyPart: BodyPart.Head,
			effects: [protectionEffect],
		};
		return characterEquipment;
	}
	
	@ResolveField('assetInstances', returns => [AssetInstanceModel])
	assetInstances(): Partial<AssetInstanceModel>[] {
		return [
			{
				count: 100,
				asset: {
					uuid: '6064cd9e-7c32-464c-985e-a4e286fe8a2f',
					name: 'Shinies',
					type: AssetType.Normal,
				}
			}
		];
	}
}

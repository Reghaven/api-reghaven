import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CharacterModel } from '../../../../model/character/character.model';
import { CharacterMapModel } from '../../../../model/character/character-map.model';
import { LocationModel } from '../../../../model/character/location.model';

@Resolver((of) => CharacterModel)
export class CharacterResolver {
	@Query((returns) => CharacterModel)
	public character(
		@Args('uuid', { type: () => String }) uuid: string,
	): Partial<CharacterModel> {
		return {
			attributes: [
				{
					uuid: '74668beb-2426-486c-8b09-fcfa0d4cb909',
					name: 'Strength',
					pointsCollected: 1,
				},
			],
			uuid: uuid,
			assetInstances: [],
			equipment: {},
		};
	}

	@ResolveField('map', (returns) => CharacterMapModel)
	public characterMap(@Parent() characterModel: CharacterModel) {
		const characterMapModel = new CharacterMapModel();
		characterMapModel.id = 3;
		return characterMapModel;
	}
}

@Resolver((of) => CharacterMapModel)
export class CharacterMapModelResolver {
	@ResolveField('currentLocation', (returns) => LocationModel)
	public currentLocation(@Parent() locationModel: CharacterMapModel) {
		return {
			name: 'TestLocation2',
			uuid: '7244f725-a0d2-4b99-9c06-a6ddd883edef',
			isUnlockedFromBeginning: true,
			characterCanLeaveAnytime: true,
			isVisibleOnMap: true,
		};
	}

	@ResolveField('unlockedLocations', (returns) => [LocationModel])
	public locationMap(@Parent() locationModel: CharacterMapModel) {
		return [
			{
				name: 'TestLocation2',
				uuid: '7244f725-a0d2-4b99-9c06-a6ddd883edef',
				isUnlockedFromBeginning: true,
				characterCanLeaveAnytime: true,
				isVisibleOnMap: true,
			},
		];
	}
}

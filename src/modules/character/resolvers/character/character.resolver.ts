import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CharacterModel } from '../../../../model/character/character.model';
import { CharacterMapModel } from '../../../../model/character/character-map.model';

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
		return {
			id: 3,
			currentLocation: {
				name: 'TestLocation',
				uuid: 'e51f65cc-0787-4d6c-8931-b87d52f2e100',
				isUnlockedFromBeginning: true,
				characterCanLeaveAnytime: true,
				isVisibleOnMap: true,
			},
			unlockedLocations: [],
		};
	}
}

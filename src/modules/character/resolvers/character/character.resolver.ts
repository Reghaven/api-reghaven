import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterModel } from '../../../../model/character/character.model';

@Resolver((of) => CharacterModel)
export class CharacterResolver {
	@Query((returns) => CharacterModel)
	public character(
		@Args('uuid', { type: () => String }) uuid: string,
	): CharacterModel {
		return {
			attributes: [
				{
					uuid: '#gen.uuid#',
					name: 'Strength',
					pointsCollected: 1,
				},
			],
			uuid: uuid,
			assetInstances: [],
			equipment: {},
			map: {
				currentLocation: {
					uuid: '#gen.uuid#',
					isUnlockedFromBeginning: true,
					characterCanLeaveAnytime: true,
					isVisibleOnMap: true,
				},
				unlockedLocations: [],
			},
		};
	}
}

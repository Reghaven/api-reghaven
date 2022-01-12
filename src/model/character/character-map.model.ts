import { CharacterMap, Location } from 'lib-storyteller';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationModel } from './location.model';

@ObjectType()
export class CharacterMapModel implements CharacterMap {
	@Field((type) => Int)
	id: number;
	@Field((type) => LocationModel)
	currentLocation: Location;
	@Field((type) => [LocationModel])
	unlockedLocations: Location[];
}

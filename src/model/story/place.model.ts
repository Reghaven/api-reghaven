import { Place, Location } from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { LocationModel } from '../character/location.model';

@ObjectType()
export class PlaceModel implements Place {
	@Field((type) => [LocationModel])
	locations: Location[];
	@Field((type) => String)
	name: string;
	@Field((type) => String)
	uuid: string;
}

import { Location } from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LocationModel implements Location {
	@Field((type) => Boolean)
	characterCanLeaveAnytime: boolean;
	@Field((type) => Boolean)
	isUnlockedFromBeginning: boolean;
	@Field((type) => Boolean)
	isVisibleOnMap: boolean;
	@Field((type) => String, { nullable: true })
	name?: string;
	@Field((type) => String)
	uuid: string;
}

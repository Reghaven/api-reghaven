import { AssetInstance, Decision, Place, Story } from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { PlaceModel } from './place.model';
import { DecisionModel } from './decision.model';
import { AssetInstanceModel } from '../character/asset-instance.model';

@ObjectType()
export class StoryModel implements Story {
	@Field((type) => AssetInstanceModel)
	characterHasAssets: AssetInstance[];
	@Field((type) => AssetInstanceModel)
	characterHasNotAssets: AssetInstance[];
	@Field((type) => PlaceModel)
	characterIsAtPlace: Place;
	@Field((type) => [DecisionModel])
	decisions: Decision[];
	@Field((type) => String)
	name: string;
	@Field((type) => String)
	text: string;
	@Field((type) => String)
	uuid: string;
}

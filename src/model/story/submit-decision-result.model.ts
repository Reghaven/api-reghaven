import {
	Attribute,
	SubmitDecisionResult,
	Location,
	AssetInstance,
} from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { AssetInstanceModel } from '../character/asset-instance.model';
import { LocationModel } from '../character/location.model';
import { AttributeModel } from '../character/attribute.model';

@ObjectType()
export class SubmitDecisionResultModel implements SubmitDecisionResult {
	@Field((type) => AttributeModel)
	attributeToIncrease: Attribute;
	@Field((type) => [AssetInstanceModel])
	characterGainsAssetInstances: AssetInstance[];
	@Field((type) => LocationModel)
	characterGoesToLocation: Location;
	@Field((type) => [AssetInstanceModel])
	characterLoosesAssetInstances: AssetInstance[];
	@Field((type) => Boolean)
	characterWins: boolean;
	@Field((type) => Number)
	providesAttributePoints: number;
	@Field((type) => String)
	text: string;
}

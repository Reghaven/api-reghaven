import { AssetCondition, AssetInstance, Location } from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { LocationModel } from '../character/location.model';
import { AssetInstanceModel } from '../character/asset-instance.model';

@ObjectType()
export class AssetConditionModel implements AssetCondition {
	@Field((type) => [AssetInstanceModel])
	characterHasAssets: AssetInstance[];
	@Field((type) => [AssetInstanceModel])
	characterHasNotAssets: AssetInstance[];
	@Field((type) => LocationModel)
	characterIsAtLocation: Location;
	@Field((type) => String)
	name: string;
	@Field((type) => String)
	uuid: string;
}

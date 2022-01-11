import { Asset, AssetInstance } from 'lib-storyteller';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AssetModel } from './asset.model';

@ObjectType()
export class AssetInstanceModel implements AssetInstance {
	@Field((type) => AssetModel)
	asset: Asset;
	@Field((type) => Int)
	count: number;
}

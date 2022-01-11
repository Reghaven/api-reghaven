import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Asset, AssetType } from 'lib-storyteller';

registerEnumType(AssetType, { name: 'AssetType' });

@ObjectType()
export class AssetModel implements Asset {
	@Field((type) => String)
	name: string;
	@Field((type) => AssetType)
	type: AssetType;
	@Field((type) => String)
	uuid: string;
}

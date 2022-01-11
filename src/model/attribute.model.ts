import { Attribute } from 'lib-storyteller';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeModel implements Attribute {
	@Field((type) => String, { nullable: true })
	name?: string;

	@Field((type) => Int)
	pointsCollected: number;

	@Field((type) => String)
	uuid: string;
}

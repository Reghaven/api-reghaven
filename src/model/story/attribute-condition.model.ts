import { Attribute, AttributeCondition } from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { AttributeModel } from '../character/attribute.model';

@ObjectType()
export class AttributeConditionModel implements AttributeCondition {
	@Field((type) => Number)
	attributeLevelFor100Percent: number;
	@Field((type) => AttributeModel)
	attributeToActivate: Attribute;
}

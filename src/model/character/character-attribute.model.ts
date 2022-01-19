import { Field, ObjectType } from '@nestjs/graphql';
import { Attribute, CharacterAttribute } from 'lib-storyteller';
import { AttributeModel } from './attribute.model';

@ObjectType()
export class CharacterAttributeModel implements CharacterAttribute {
	@Field((type) => AttributeModel)
	attribute: Attribute;
	@Field((type) => Number)
	pointsCollected: number;
}

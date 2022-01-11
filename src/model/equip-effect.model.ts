import { Attribute, EquipEffect, EquipEffectType } from 'lib-storyteller';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { AttributeModel } from './attribute.model';

registerEnumType(EquipEffectType, { name: 'EquipEffectType' });

@ObjectType()
export class EquipEffectModel implements EquipEffect {
	@Field((type) => AttributeModel)
	attribute: Attribute;
	@Field((type) => String)
	name: string;
	@Field((type) => EquipEffectType)
	type: EquipEffectType;
	@Field((type) => String)
	uuid: string;
}

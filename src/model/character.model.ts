import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Character {
	@Field((type) => String)
	uuid: string;
}

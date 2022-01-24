import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AccountInput {
	@Field((type) => String)
	username: string;
	@Field((type) => String)
	email: string;
	@Field((type) => String)
	password: string;
}

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AccountModel } from '../../../../model/account/account.model';
import { AccountInput } from './account.input';
import { DatabaseService } from '../../../database/services/database/database.service';
import { BadRequestException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Resolver((of) => AccountModel)
export class AccountResolver {
	constructor(private readonly databaseService: DatabaseService) {}

	@Mutation((returns) => AccountModel)
	public async createAccount(@Args('accountData') accountData: AccountInput) {
		// check if username exists
		const existingAccount = await this.databaseService.account.findUnique({
			where: { username: accountData.username },
		});
		if (existingAccount) {
			throw new BadRequestException('ENTITY:EXISTS');
		}

		// encrypt password
		const newAccount = new AccountModel();
		newAccount.uuid = uuid();

		// store account
		return newAccount;
	}
}

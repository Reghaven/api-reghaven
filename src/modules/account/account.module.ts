import { Module } from '@nestjs/common';
import { AccountResolver } from './resolvers/account/account.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
	imports: [DatabaseModule],
	providers: [AccountResolver],
})
export class AccountModule {}

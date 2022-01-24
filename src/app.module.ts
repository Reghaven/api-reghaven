import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './modules/character/character.module';
import { StoryModule } from './modules/story/story.module';
import { AccountModule } from './modules/account/account.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			playground: true,
			debug: true,
			autoSchemaFile: 'schema.gql',
		}),
		CharacterModule,
		StoryModule,
		AccountModule,
		DatabaseModule,
	],
})
export class AppModule {}

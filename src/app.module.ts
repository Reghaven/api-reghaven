import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterModule } from './modules/character/character.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			playground: true,
			debug: true,
			autoSchemaFile: 'schema.gql',
		}),
		CharacterModule,
	],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

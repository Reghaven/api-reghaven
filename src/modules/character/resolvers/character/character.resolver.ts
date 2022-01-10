import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterModel } from '../../../../model/character.model';

@Resolver((of) => CharacterModel)
export class CharacterResolver {
	@Query((returns) => CharacterModel)
	public character(@Args('uuid', { type: () => String }) uuid: string) {
		return {
			uuid: uuid,
		};
	}
}

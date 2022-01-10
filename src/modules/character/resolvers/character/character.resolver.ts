import { Args, Query, Resolver } from '@nestjs/graphql';
import { Character } from '../../../../model/character.model';

@Resolver((of) => Character)
export class CharacterResolver {
	@Query((returns) => Character)
	public character(@Args('uuid', { type: () => String }) uuid: string) {
		return {
			uuid: uuid,
		};
	}
}

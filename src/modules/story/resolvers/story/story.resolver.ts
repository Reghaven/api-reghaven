import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { StoryModel } from '../../../../model/story/story.model';
import { DecisionModel } from '../../../../model/story/decision.model';

@Resolver((of) => StoryModel)
export class StoryResolver {
	@Query((returns) => [StoryModel])
	public story(@Args('uuid', { type: () => String }) uuid: string) {
		const demoStory = new StoryModel();
		demoStory.name = 'Demo-Story';
		demoStory.uuid = 'd154640f-c5a1-417a-a397-609ff9b43062';
		demoStory.text = 'This is just a proof of concept';
		return [demoStory];
	}

	@ResolveField('decisions', (returns) => [DecisionModel])
	public decisions(@Parent() story: StoryModel) {
		const demoDecision = new DecisionModel();
		demoDecision.uuid = '4f5327ee-8e77-4774-bb19-264983faac3f';
		demoDecision.name = 'Read the newspaper';
		return [demoDecision];
	}
}

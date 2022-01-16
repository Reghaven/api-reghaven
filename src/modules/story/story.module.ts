import { Module } from '@nestjs/common';
import { StoryResolver } from './resolvers/story/story.resolver';
import { AttributeConditionResolver } from './resolvers/attribute-condition/attribute-condition.resolver';

@Module({
	providers: [StoryResolver, AttributeConditionResolver],
})
export class StoryModule {}

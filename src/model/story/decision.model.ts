import {
	AssetCondition,
	AttributeCondition,
	Decision,
	SubmitDecisionResult,
} from 'lib-storyteller';
import { Field, ObjectType } from '@nestjs/graphql';
import { AttributeConditionModel } from './attribute-condition.model';
import { AssetConditionModel } from './asset-condition.model';
import { SubmitDecisionResultModel } from './submit-decision-result.model';

@ObjectType()
export class DecisionModel implements Decision {
	@Field((type) => AttributeConditionModel)
	attributeCondition: AttributeCondition;
	@Field((type) => AssetConditionModel)
	conditionsToShow: AssetCondition;
	@Field((type) => AssetConditionModel)
	conditionsToUse: AssetCondition;
	@Field((type) => String)
	name: string;
	@Field((type) => SubmitDecisionResultModel)
	onFail: SubmitDecisionResult;
	@Field((type) => SubmitDecisionResultModel)
	onWin: SubmitDecisionResult;
	@Field((type) => String)
	text: string;
	@Field((type) => String)
	uuid: string;
}

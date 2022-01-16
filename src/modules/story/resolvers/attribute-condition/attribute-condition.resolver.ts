import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AttributeConditionModel } from '../../../../model/story/attribute-condition.model';
import { DecisionModel } from '../../../../model/story/decision.model';
import { AssetConditionModel } from '../../../../model/story/asset-condition.model';
import { SubmitDecisionResultModel } from '../../../../model/story/submit-decision-result.model';

@Resolver((of) => DecisionModel)
export class AttributeConditionResolver {
	@ResolveField('attributeCondition', (returns) => AttributeConditionModel)
	public attributeCondition(@Parent() decision: DecisionModel) {
		const attributeCondition = new AttributeConditionModel();
		attributeCondition.attributeLevelFor100Percent = 100;
		attributeCondition.attributeToActivate = {
			name: 'DemoAsset',
			uuid: 'da94ab98-542c-45e2-931d-31f1f40842de',
			pointsCollected: 10,
		};
		return attributeCondition;
	}

	@ResolveField('conditionsToUse', (returns) => AssetConditionModel)
	public conditionsToUse(@Parent() decision: DecisionModel) {
		const assetCondition = new AssetConditionModel();
		assetCondition.uuid = '8a3e7b1b-99eb-4a8b-ac4e-b6d76990d16d';
		assetCondition.characterHasAssets = [];
		assetCondition.characterHasNotAssets = [];
		assetCondition.characterIsAtLocation = {
			uuid: '11ea427f-6abc-4fbf-b680-006b66372183',
			name: 'Location 1',
			isUnlockedFromBeginning: true,
			characterCanLeaveAnytime: true,
			isVisibleOnMap: true,
		};
		return assetCondition;
	}

	@ResolveField('conditionsToShow', (returns) => AssetConditionModel)
	public conditionsToShow(@Parent() decision: DecisionModel) {
		const assetCondition = new AssetConditionModel();
		assetCondition.uuid = '8a3e7b1b-99eb-4a8b-ac4e-b6d76990d16d';
		assetCondition.characterHasAssets = [];
		assetCondition.characterHasNotAssets = [];
		assetCondition.characterIsAtLocation = {
			uuid: '11ea427f-6abc-4fbf-b680-006b66372183',
			name: 'Location 1',
			isUnlockedFromBeginning: true,
			characterCanLeaveAnytime: true,
			isVisibleOnMap: true,
		};
		return assetCondition;
	}

	@ResolveField('onWin', (returns) => SubmitDecisionResultModel)
	public onWin(@Parent() decision: DecisionModel) {
		const submitDecision = new SubmitDecisionResultModel();
		submitDecision.text = 'You Won!';
		return submitDecision;
	}

	@ResolveField('onFail', (returns) => SubmitDecisionResultModel)
	public onFail(@Parent() decision: DecisionModel) {
		const submitDecision = new SubmitDecisionResultModel();
		submitDecision.text = 'You Lost!';
		return submitDecision;
	}
}

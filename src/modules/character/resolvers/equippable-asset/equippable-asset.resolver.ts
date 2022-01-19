import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EquippableAssetModel } from '../../../../model/character/equippable-asset.model';
import { EquipEffectModel } from '../../../../model/character/equip-effect.model';
import { EquipEffectType } from 'lib-storyteller';

@Resolver((of) => EquippableAssetModel)
export class EquippableAssetResolver {
	@ResolveField('effects', (returns) => [EquipEffectModel])
	public effects(@Parent() equippable: EquippableAssetModel) {
		const protectionEffect = new EquipEffectModel();
		protectionEffect.uuid = '5e4664ed-ae83-4811-9b27-184f8d705fd9';
		protectionEffect.name = 'Protection';
		protectionEffect.type = EquipEffectType.Increase;
		protectionEffect.attribute = {
			uuid: '1b8a2fad-ad63-4594-b1a3-266e111bf045',
			name: 'Strength',
		};
		return [protectionEffect];
	}
}

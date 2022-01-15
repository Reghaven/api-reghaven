import { Module } from '@nestjs/common';
import { CharacterResolver } from './resolvers/character/character.resolver';
import { CharacterMapResolver } from './resolvers/character-map/character-map.resolver';
import { CharacterEquipmentResolver } from './resolvers/character-equipment/character-equipment.resolver';
import { EquippableAssetResolver } from './resolvers/equippable-asset/equippable-asset.resolver';

@Module({
	providers: [
		CharacterResolver,
		CharacterMapResolver,
		CharacterEquipmentResolver,
		EquippableAssetResolver,
	],
})
export class CharacterModule {}

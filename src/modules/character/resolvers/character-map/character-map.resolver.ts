import {Parent, ResolveField, Resolver} from '@nestjs/graphql';
import {CharacterMapModel} from "../../../../model/character/character-map.model";
import {LocationModel} from "../../../../model/character/location.model";

@Resolver((of) => CharacterMapModel)
export class CharacterMapResolver {
    @ResolveField('currentLocation', (returns) => LocationModel)
    public currentLocation(@Parent() locationModel: CharacterMapModel) {
        return {
            name: 'TestLocation3',
            uuid: '7244f725-a0d2-4b99-9c06-a6ddd883edef',
            isUnlockedFromBeginning: true,
            characterCanLeaveAnytime: true,
            isVisibleOnMap: true,
        };
    }

    @ResolveField('unlockedLocations', (returns) => [LocationModel])
    public locationMap(@Parent() locationModel: CharacterMapModel) {
        return [
            {
                name: 'TestLocation3',
                uuid: '7244f725-a0d2-4b99-9c06-a6ddd883edef',
                isUnlockedFromBeginning: true,
                characterCanLeaveAnytime: true,
                isVisibleOnMap: true,
            },
        ];
    }
}

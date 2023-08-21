/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';
import type { RelatedParty } from './RelatedParty';
import type { Whiteness } from './Whiteness';

export type Cid = {
    happenAt: string;
    location: Location;
    injuries: boolean;
    otherVehicleDamaged: boolean;
    otherPropertiesDamages: boolean;
    witnesses: Whiteness;
    relatedParties: Array<RelatedParty>;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Driver } from './Driver';
import type { InsuranceCompany } from './InsuranceCompany';
import type { Insured } from './Insured';
import type { Vehicle } from './Vehicle';

export type RelatedParty = {
    circumstances: number;
    insured: Insured;
    vehicle: Vehicle;
    insuranceCompany: InsuranceCompany;
    driver: Driver;
    visibleDamages: string;
    observations: string;
};


/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Location } from './Location';

export type InsuranceCompany = {
    denomination: string;
    insuranceNumber: string;
    greenCardNumber: string;
    validFrom: string;
    validTo: string;
    damageCoverage: boolean;
    agencyName: string;
    agencyLocation: Location;
};


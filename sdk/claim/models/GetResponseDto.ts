/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetClaimFileResponseDto } from './GetClaimFileResponseDto';

export type GetResponseDto = {
    _id: string;
    user_id: string;
    claim_category: string;
    claim_status: string;
    claim_description: string;
    files: GetClaimFileResponseDto;
    date_started?: string;
    date_closed?: string;
    data_created: string;
    date_updated: string;
};


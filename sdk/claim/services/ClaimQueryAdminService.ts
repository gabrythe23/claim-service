/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetListResponseDto } from '../models/GetListResponseDto';
import type { GetResponseDto } from '../models/GetResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClaimQueryAdminService {

    /**
     * @param limit
     * @param skip
     * @returns GetListResponseDto
     * @throws ApiError
     */
    public static claimAdminQueryControllerGetList(
        limit: number = 20,
        skip?: number,
    ): CancelablePromise<GetListResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/claim/admin/claim',
            query: {
                'limit': limit,
                'skip': skip,
            },
        });
    }

    /**
     * @param id
     * @returns GetResponseDto
     * @throws ApiError
     */
    public static claimAdminQueryControllerGetClaim(
        id: string,
    ): CancelablePromise<GetResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/claim/admin/claim/{id}',
            path: {
                'id': id,
            },
        });
    }

}

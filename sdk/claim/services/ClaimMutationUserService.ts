/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestDto } from '../models/CreateRequestDto';
import type { CreateResponseDto } from '../models/CreateResponseDto';
import type { GetListResponseDto } from '../models/GetListResponseDto';
import type { GetResponseDto } from '../models/GetResponseDto';
import type { UpdateRequestDto } from '../models/UpdateRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClaimMutationUserService {

    /**
     * @param requestBody
     * @returns CreateResponseDto
     * @throws ApiError
     */
    public static claimUserMutationControllerGetList(
        requestBody: CreateRequestDto,
    ): CancelablePromise<CreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/claim/claim',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param limit
     * @param skip
     * @returns GetListResponseDto
     * @throws ApiError
     */
    public static claimUserQueryControllerGetList(
        limit: number = 20,
        skip?: number,
    ): CancelablePromise<GetListResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/claim/claim',
            query: {
                'limit': limit,
                'skip': skip,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static claimUserMutationControllerUpdateClaim(
        id: string,
        requestBody: UpdateRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/claim/claim/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns GetResponseDto
     * @throws ApiError
     */
    public static claimUserQueryControllerGetClaim(
        id: string,
    ): CancelablePromise<GetResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/claim/claim/{id}',
            path: {
                'id': id,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRequestDto } from '../models/CreateRequestDto';
import type { CreateResponseDto } from '../models/CreateResponseDto';
import type { UpdateRequestDto } from '../models/UpdateRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClaimMutationAdminService {

    /**
     * @param requestBody
     * @returns CreateResponseDto
     * @throws ApiError
     */
    public static claimAdminMutationControllerGetList(
        requestBody: CreateRequestDto,
    ): CancelablePromise<CreateResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/claim/admin/claim',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static claimAdminMutationControllerUpdateClaim(
        id: string,
        requestBody: UpdateRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/claim/admin/claim/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

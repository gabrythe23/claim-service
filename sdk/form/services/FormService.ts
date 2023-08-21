/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFormRequestDto } from '../models/CreateFormRequestDto';
import type { CreateFormResponseDto } from '../models/CreateFormResponseDto';
import type { GetFormResponseDto } from '../models/GetFormResponseDto';
import type { SubmitFormRequestDto } from '../models/SubmitFormRequestDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FormService {

    /**
     * @param requestBody
     * @returns CreateFormResponseDto
     * @throws ApiError
     */
    public static formControllerCreate(
        requestBody: CreateFormRequestDto,
    ): CancelablePromise<CreateFormResponseDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/form',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns GetFormResponseDto
     * @throws ApiError
     */
    public static formControllerGet(
        id: string,
    ): CancelablePromise<GetFormResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/form/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static formControllerSubmit(
        id: string,
        requestBody: SubmitFormRequestDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/form/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}

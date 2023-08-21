/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cid } from '../models/Cid';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CidService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static cidControllerCreate(
        requestBody: Cid,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/claim/cid',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param a
     * @param b
     * @returns any
     * @throws ApiError
     */
    public static cidControllerViewBaremeResult(
        a: number,
        b: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/claim/cid/accountability/{A}/{B}',
            path: {
                'A': a,
                'B': b,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegExp } from './RegExp';

export type FormTextElement = {
    propertyName: string;
    request: string;
    type: FormTextElement.type;
    regex?: RegExp;
};

export namespace FormTextElement {

    export enum type {
        BOOLEAN = 'BOOLEAN',
        SELECT = 'SELECT',
        TEXT = 'TEXT',
        DATE_TIME = 'DATE_TIME',
        DATE = 'DATE',
        TIME = 'TIME',
        NUMBER = 'NUMBER',
    }


}


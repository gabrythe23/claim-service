/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormBooleanElement = {
    propertyName: string;
    request: string;
    type: FormBooleanElement.type;
};

export namespace FormBooleanElement {

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


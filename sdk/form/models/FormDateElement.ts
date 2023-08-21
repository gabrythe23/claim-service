/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormDateElement = {
    propertyName: string;
    request: string;
    type: FormDateElement.type;
};

export namespace FormDateElement {

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


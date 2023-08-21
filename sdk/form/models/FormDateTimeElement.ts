/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormDateTimeElement = {
    propertyName: string;
    request: string;
    type: FormDateTimeElement.type;
};

export namespace FormDateTimeElement {

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


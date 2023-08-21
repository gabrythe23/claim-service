/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormNumberElement = {
    propertyName: string;
    request: string;
    type: FormNumberElement.type;
};

export namespace FormNumberElement {

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


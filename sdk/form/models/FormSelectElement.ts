/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormSelectElement = {
    propertyName: string;
    request: string;
    type: FormSelectElement.type;
    options: Array<string>;
};

export namespace FormSelectElement {

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


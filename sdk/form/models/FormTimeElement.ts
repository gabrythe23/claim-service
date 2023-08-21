/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FormTimeElement = {
    propertyName: string;
    request: string;
    type: FormTimeElement.type;
};

export namespace FormTimeElement {

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


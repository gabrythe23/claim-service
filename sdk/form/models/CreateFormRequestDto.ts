/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FormBooleanElement } from './FormBooleanElement';
import type { FormDateElement } from './FormDateElement';
import type { FormDateTimeElement } from './FormDateTimeElement';
import type { FormNumberElement } from './FormNumberElement';
import type { FormSelectElement } from './FormSelectElement';
import type { FormTextElement } from './FormTextElement';
import type { FormTimeElement } from './FormTimeElement';

export type CreateFormRequestDto = {
    name: string;
    elements: Array<(FormBooleanElement | FormDateElement | FormDateTimeElement | FormNumberElement | FormSelectElement | FormTextElement | FormTimeElement)>;
};


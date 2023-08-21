import { HttpStatus } from '@nestjs/common';
import { DomainException } from '../domain.exception';

export class IncorrectDataException extends DomainException {
  constructor() {
    super('Check data', HttpStatus.PRECONDITION_FAILED);
  }
}

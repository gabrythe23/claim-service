import { HttpStatus } from '@nestjs/common';
import { DomainException } from '../domain.exception';

export class NotFoundException extends DomainException {
  constructor(schema = 'Claim') {
    super(`${schema} Not Found`, HttpStatus.NOT_FOUND);
  }
}

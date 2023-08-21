import { SetMetadata } from '@nestjs/common';
import { DECORATOR_REQUIRED_ROLE } from '../const';
import { UserRole } from '@app/authentication';

export const RequiredRole = (...role: UserRole[]) =>
  SetMetadata(DECORATOR_REQUIRED_ROLE, role || []);

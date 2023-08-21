import { ClaimAdminQueryController } from './claim.admin.query.controller';
import { ClaimAdminMutationController } from './claim.admin.mutation.controller';
import { ClaimUserMutationController } from './claim.user.mutation.controller';
import { ClaimUserQueryController } from './claim.user.query.controller';

export const controllers = [
  ClaimAdminQueryController,
  ClaimAdminMutationController,
  ClaimUserMutationController,
  ClaimUserQueryController,
];

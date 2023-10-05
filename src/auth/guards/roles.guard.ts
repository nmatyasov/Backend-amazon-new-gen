import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';

import RequestWithUser from '../requestWithUser.interface';
import { RolesEnum } from '@app/lib';

const RolesGuard = (role: RolesEnum): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const req = context.switchToHttp().getRequest<RequestWithUser>();
      const user = req.user;
      return user?.roles.includes(role);
    }
  }
  return mixin(RoleGuardMixin);
};

export default RolesGuard;

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import {
  DECORATOR_IS_PUBLIC,
  DECORATOR_REQUIRED_ROLE,
  EXPRESS_HEADER_AUTHORIZATION,
  EXPRESS_REQUEST_USER_INFO,
} from './const';
import {
  NotAuthenticatedException,
  NotAuthorizedException,
} from '@app/exceptions';
import { UserInfo, UserRole } from './auth.interfaces';
import { verify } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { ObjectId } from 'mongodb';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger: Logger = new Logger(AuthGuard.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    if (this.isPublic(ctx)) return true;

    const userInfos = await this.validateToken(this.getToken(ctx));
    this.checkRole(ctx, userInfos.role);
    this.setUserInfoToReq(ctx, userInfos);
    return true;
  }

  private getToken(context: ExecutionContext): string {
    const request = context.switchToHttp().getRequest();
    const header = request.headers[EXPRESS_HEADER_AUTHORIZATION];
    if (!header || !header.length || header.split(' ').length !== 2)
      throw new NotAuthenticatedException();

    const [, token] = header.split(' ');
    return token;
  }

  private async validateToken(token: string): Promise<UserInfo> {
    try {
      const payload = await verify(token, this.configService.get('jwt.secret'));
      if (!payload || !payload['id']) throw new NotAuthorizedException();
      return {
        token,
        role: payload['role'] || UserRole.USER,
        id: new ObjectId(payload['id']),
      };
    } catch (err) {
      this.logger.error(err);
      throw new NotAuthenticatedException();
    }
  }

  private setUserInfoToReq(
    context: ExecutionContext,
    userInfo: UserInfo,
  ): void {
    const request = context.switchToHttp().getRequest();
    request[EXPRESS_REQUEST_USER_INFO] = userInfo;
  }

  /**
   * this private method check if guard have to be called or pass getting isPublic property set by decorator
   * @param {ExecutionContext} ctx the current defined context of this guard (in this case HTTP)
   * @private
   * @return {boolean}
   */
  private isPublic(ctx: ExecutionContext): boolean {
    return (
      this.reflector.getAllAndOverride<boolean>(DECORATOR_IS_PUBLIC, [
        ctx.getHandler(),
        ctx.getClass(),
      ]) || false
    );
  }

  private checkRole(ctx: ExecutionContext, userRole: UserRole): void {
    const requiredRoles =
      this.reflector.getAllAndOverride<UserRole[]>(DECORATOR_REQUIRED_ROLE, [
        ctx.getHandler(),
        ctx.getClass(),
      ]) || [];

    if (requiredRoles.length === 0) return;
    if (!requiredRoles.includes(userRole)) throw new NotAuthorizedException();
    return;
  }
}

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DomainException } from './domain.exception';
import { env } from '@app/utils';

interface ErrorPayload {
  statusCode: HttpStatus;
  timestamp: number;
  path: string;
  message: string;
  stack?: string;
  details?: any;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter<Error> {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    this.logger.log(`caught exception ${exception}`);
    const statusCode = HttpExceptionFilter.getStatus(exception);
    const response = host.switchToHttp().getResponse<Response>();

    response
      .status(statusCode)
      .json(
        HttpExceptionFilter.getPayload(
          exception,
          statusCode,
          host.switchToHttp().getRequest<Request>(),
        ),
      );
  }

  private static getStatus(exception: any): HttpStatus {
    const constructor = exception.constructor;
    if (constructor === DomainException) return exception.getStatus();
    if (exception?.getStatus && exception.getStatus())
      return exception.getStatus();
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private static getPayload(
    exception: any,
    statusCode: HttpStatus,
    request: Request,
  ): ErrorPayload {
    const payload: ErrorPayload = {
      statusCode,
      timestamp: Date.now(),
      path: request.url,
      message: exception?.message,
    };
    if (exception?.getResponse && typeof exception.getResponse() === 'object') {
      payload.details = exception.getResponse();
      payload.message =
        payload.details?.message ||
        payload.details?.errorMessage ||
        payload.message;

      delete payload.details?.errorMessage;
      delete payload.details?.message;
      delete payload.details?.statusCode;
      if (
        typeof payload.details === 'object' &&
        !Object.keys(payload.details).length
      )
        delete payload.details;
    }
    if (env<string>('ENV_NAME', 'develop') !== 'production')
      payload['stack'] = exception.stack;
    return payload;
  }
}

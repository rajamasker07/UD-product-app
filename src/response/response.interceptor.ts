import { CallHandler, ExecutionContext, Injectable, NestInterceptor, HttpStatus, BadRequestException } from '@nestjs/common';
import { ResponseInterface } from './response.interface';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
    .pipe(
      map((response: ResponseInterface<any>) => ({
        status: response.status,
        message: response.message,
        data: response.data,
      }))
    )
  }

}

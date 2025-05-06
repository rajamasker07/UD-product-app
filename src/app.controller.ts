import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseInterceptor } from './response/response.interceptor';
import { ResponseInterface } from './response/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseInterceptors(new ResponseInterceptor())
  getHello() {
    return {
      status: 'success',
      message: 'Hello World!',
      data: 'hello'
    }
  }
}

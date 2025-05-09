import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './response/response.interceptor';
import { ValidationErrorPipe } from './validation-error/validation-error.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalPipes(new ValidationErrorPipe())
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();

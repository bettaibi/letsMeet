import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

const PORT = 5000;

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.use(helmet());
  app.enableCors({
    // origin: 'https://bettaibi.github.io',
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    exposedHeaders: ["set-cookie"],
    allowedHeaders: ['X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'],
  });

  await app.listen(PORT, ()=> {
    console.log('listening on port, '+PORT)
  });
}
bootstrap();

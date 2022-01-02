import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetModule } from './gateways/meet.module';

@Module({
  imports: [
    MeetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

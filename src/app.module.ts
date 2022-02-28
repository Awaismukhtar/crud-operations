import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}

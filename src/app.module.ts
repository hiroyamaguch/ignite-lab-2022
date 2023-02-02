import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/kafka/messaging.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
})
export class AppModule {}
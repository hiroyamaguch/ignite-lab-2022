import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications-publisher',
        brokers: ['equipped-cat-6715-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZXF1aXBwZWQtY2F0LTY3MTUkbd0-sZsdIZnR0MrHyE_7NfGy_UtluSxoI3Ey9Wk',
          password:
            'Y7At6-AfWQeY05kedHYMJ2BYRxGfxtYn2pfVtJN31JY-GCBIIn77JK8hbWqMK5JT2sc09A==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}

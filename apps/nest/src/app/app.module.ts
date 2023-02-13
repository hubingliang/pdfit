import { Module } from '@nestjs/common';

import { AppController, PDFController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, PDFController],
  providers: [AppService],
})
export class AppModule {}

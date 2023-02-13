import { Controller, Get } from '@nestjs/common';
import playwright from 'playwright';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
@Controller('pdf')
export class PDFController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:3000/');
    await page.emulateMedia({ media: 'screen' });
    await page.pdf({ path: `document.pdf` });
    await browser.close();
    return { message: 'success' };
  }
}

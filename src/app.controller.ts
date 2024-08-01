import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  @ApiOperation({
    summary: 'Health check',
  })
  @ApiOkResponse({
    description: 'API is running',
  })
  index(): string {
    return 'OK';
  }
}

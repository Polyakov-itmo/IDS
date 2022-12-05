import { Controller, Get, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { CreateLogDto } from './logs/dto/create-log-dto'
import { LogService } from './logs/logs.service'
import { Request, Response } from 'express'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logService: LogService,
  ) {}

  COUNTER = 0;

  @Get('/')
  async default(@Req() request: Request): Promise<number> {
    let date = new Date()

    let log: CreateLogDto = {
      datetime:
        date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' 
        + date.getSeconds()+':'+date.getMinutes()+':'+date.getHours(),
      client_info:
        'USER-AGENT:' +
        (request.header('User-Agent') ?? '') +
        ' URL: ' +
        request.url,
    }
    await this.logService.create(log)
    return this.appService.default(this.COUNTER)
  }

  @Get('/stat')
  async stat(@Req() request: Request): Promise<number> {
    let date = new Date()

    let log: CreateLogDto = {
      datetime:
        date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' 
        + date.getSeconds()+':'+date.getMinutes()+':'+date.getHours(),
      client_info: (request.header('User-Agent') ?? '') + request.url,
    }
    this.COUNTER +=1;
    await this.logService.create(log)
    return this.appService.stat(this.COUNTER)
  }

  @Get('/about')
  async about(@Req() request: Request): Promise<string> {
    let date = new Date()
    let log: CreateLogDto = {
      datetime:
        date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' 
        + date.getSeconds()+':'+date.getMinutes()+':'+date.getHours(),
      client_info: (request.header('User-Agent') ?? '') + request.url,
    }
    await this.logService.create(log)
    return this.appService.about();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLogDto } from './dto/create-log-dto';
import { Log } from './logs.model';

@Injectable()
export class LogService {
  
  constructor(@InjectModel(Log) private logRepository: typeof Log){}

  async create(dto: CreateLogDto) {
    const log = await this.logRepository.create(dto);
    return log;
  }

  async logInfo() {
    const logs = await this.logRepository.findAll();
    return logs;
  }
}

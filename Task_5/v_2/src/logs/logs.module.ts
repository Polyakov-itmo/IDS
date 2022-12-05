import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Log } from './logs.model'
import { LogService } from './logs.service'

@Module({
  controllers: [],
  providers: [LogService],
  imports: [SequelizeModule.forFeature([Log])],
  exports: [
    LogService
  ]
})
export class LogsModule {}

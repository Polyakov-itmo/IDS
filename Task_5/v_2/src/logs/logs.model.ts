import { Table, Column, DataType, Model } from 'sequelize-typescript'

interface LogCreationAttr {
  id: number
  datetime: string
  client_info: string
}

@Table({ tableName: 'logs' })
export class Log extends Model<Log, LogCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  datetime: string

  @Column({ type: DataType.STRING, allowNull: true })
  client_info: string
}

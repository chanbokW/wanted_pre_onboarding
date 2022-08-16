import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const tppeORMConfig : TypeOrmModuleOptions ={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'test',
    password: 'test',
    database: 'wanted',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}
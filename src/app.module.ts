import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { tppeORMConfig } from './configs/typeorm.config';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(tppeORMConfig),
    CompanyModule,
    NoticeModule
  ]
})
export class AppModule {}

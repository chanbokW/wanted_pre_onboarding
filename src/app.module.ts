import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { tppeORMConfig } from './configs/typeorm.config';
import { NoticeModule } from './notice/notice.module';
import { ApplyModule } from './apply/apply.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(tppeORMConfig),
    CompanyModule,
    NoticeModule,
    ApplyModule,
    UserModule
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';
import { NoticeController } from './notice.controller';
import { Notice } from './notice.entity';
import { NoticeService } from './notice.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Notice,Company])
  ],
  controllers: [NoticeController],
  providers: [NoticeService]
})
export class NoticeModule {}

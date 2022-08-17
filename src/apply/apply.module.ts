import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from 'src/notice/notice.entity';
import { User } from 'src/user/user.entity';
import { ApplyController } from './apply.controller';
import { Apply } from './apply.entity';
import { ApplyService } from './apply.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Apply,User,Notice])
  ],
  controllers: [ApplyController],
  providers: [ApplyService]
})
export class ApplyModule {}

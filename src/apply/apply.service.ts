import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notice } from 'src/notice/notice.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Apply } from './apply.entity';
import { CreateApplyDto } from './dto/create.apply.dto';

@Injectable()
export class ApplyService {
    constructor(
        @InjectRepository(Apply)
        private applyRepository: Repository<Apply>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Notice)
        private noticeRepository: Repository<Apply>

    ){}

    async apply(createApplyDto: CreateApplyDto):Promise<Apply> {
        const apply = await this.applyRepository.findOne({
            where: {user: {id: createApplyDto.userId}},
            relations: ['notice','user']
        });

        if(apply){
            throw new NotAcceptableException( apply.id + '지원하신 내역이 있습니다.');
        }

        const user = await this.userRepository.findOne({
            where: { id: createApplyDto.userId}
        });

        const notice = await this.noticeRepository.findOne({
            where: {id : createApplyDto.notiseId}
        });

        const applyed = await this.applyRepository.save({
            user,
            notice
        });
        
        return applyed;
    }
}

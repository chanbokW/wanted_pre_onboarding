import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';
import { Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create.notice.dto';
import { Notice } from './notice.entity';

@Injectable()
export class NoticeService {
    constructor(
        @InjectRepository(Notice)
        private noticeRepository: Repository<Notice>,
        @InjectRepository(Company)
        private companyRepository: Repository<Company>
    ) { }

    async createNotice(createNotice: CreateNoticeDto): Promise<Notice> {
        console.log(createNotice)
        const company = await this.companyRepository.findOne({
            where: { id: createNotice.companyId }
        });

        if (!company) {
            throw new NotFoundException(`${createNotice.companyId}존재하지 않은 회사 정보입니다.`);
        }
        // console.log(createNotice.toEntity(company));

        return await this.noticeRepository.save({
            company,
            position: createNotice.position,
            compensation: createNotice.compensation,
            content: createNotice.content,
            techstack: createNotice.techstack
        });
    }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/company/company.entity';
import { Repository } from 'typeorm';
import { CreateNoticeDto } from './dto/create.notice.dto';
import { UpdateNoticeDto } from './dto/update.notice.dto';
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
        const company = await this.companyRepository.findOne({
            where: { id: createNotice.companyId }
        });

        if (!company) {
            throw new NotFoundException(`${createNotice.companyId}존재하지 않은 회사 정보입니다.`);
        }

        return this.noticeRepository.save({
            company,
            position: createNotice.position,
            compensation: createNotice.compensation,
            content: createNotice.content,
            techstack: createNotice.techstack
        });
    }

    async updateNotice(id: number, updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
        const notice = await this.noticeRepository.findOne({
            where: { id }
        });

        if (!notice) {
            throw new NotFoundException('존재하지 않은 채용공고 입니다.');
        }

        Object.assign(notice, updateNoticeDto);
        return await this.noticeRepository.save(notice);
    }

    async deleteNotice(id: number) {
        const notice = await this.noticeRepository.findOne({
            where: { id }
        });

        if (!notice) {
            throw new NotFoundException('존재하지 않은 채용공고 입니다.');
        }

        const result = await this.noticeRepository.delete(id);
        return result.affected == 1 ? '채용공고가 성공적으로 삭제 되었습니다.'
            : '채용공고 삭제에 실패하였습니다.';
    }

    async getAllNotice(): Promise<Notice[]> {
        return await this.noticeRepository.find();
    }
}

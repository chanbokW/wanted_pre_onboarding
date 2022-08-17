import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/craate.company';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>) { }

    async createCompany(createCompanyDto: CreateCompanyDto): Promise<number> {
        const saveCompany = await this.companyRepository.save(createCompanyDto);
        return saveCompany.id;
    }

    async getOneComapny(id: number): Promise<Company> {
        const company = await this.companyRepository.findOne({
            where: { id },
        });
        if (!company) {
            throw new NotFoundException('존재하지 않은 회사입니다.');
        }
        return company;
    }

    async getAllComapny(): Promise<Company[]> {
        return await this.companyRepository.find();
    }
}

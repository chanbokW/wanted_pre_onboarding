import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/craate.company';

@Controller('company')
export class CompanyController {

    constructor(private companyService: CompanyService){}

    @Post()
    createCompany(@Body()createCompanyDto: CreateCompanyDto):Promise<number> {
        return this.companyService.createCompany(createCompanyDto);
    }

    @Get(':id')
    getComapny(@Param('id') id: number):Promise<Company>{
        return this.companyService.getOneComapny(id);
    }

    @Get()
    getAllComapny(): Promise<Company[]> {
        return this.companyService.getAllComapny();
    }
}

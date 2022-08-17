import { Body, Controller, Post } from '@nestjs/common';
import { Apply } from './apply.entity';
import { ApplyService } from './apply.service';
import { CreateApplyDto } from './dto/create.apply.dto';

@Controller('apply')
export class ApplyController {

    constructor(private applyService: ApplyService){}

    @Post()
    async apply(@Body() createApplyDto: CreateApplyDto):Promise<Apply>{
        return this.applyService.apply(createApplyDto);
    }
}
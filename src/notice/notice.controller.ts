import { Body, Controller, Post } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create.notice.dto';
import { Notice } from './notice.entity';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
    constructor(private noticeService: NoticeService){}

    @Post()
    createNotice(@Body() createNoticeDto: CreateNoticeDto): Promise<Notice> {
        return this.noticeService.createNotice(createNoticeDto);
    }
}

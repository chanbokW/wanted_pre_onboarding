import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create.notice.dto';
import { UpdateNoticeDto } from './dto/update.notice.dto';
import { Notice } from './notice.entity';
import { NoticeService } from './notice.service';

@Controller('notice')
export class NoticeController {
    constructor(private noticeService: NoticeService){}

    @Post()
    createNotice(@Body() createNoticeDto: CreateNoticeDto): Promise<Notice> {
        return this.noticeService.createNotice(createNoticeDto);
    }

    @Put(':id')
    updateNotice(@Param('id') id: number,@Body() updateNoticeDto: UpdateNoticeDto): Promise<Notice> {
        return this.noticeService.updateNotice(id, updateNoticeDto);
    }

    @Delete(':id')
    deleteNotice(@Param('id') id: number) {
        return this.noticeService.deleteNotice(id);
    }

    @Get()
    getAllNotice(): Promise<Notice[]> {
        return this.noticeService.getAllNotice();
    }
}

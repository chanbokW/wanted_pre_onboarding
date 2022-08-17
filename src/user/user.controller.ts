import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getAllUser(): Promise<User[]>{
        return this.userService.getAllUser();
    }

    @Get(':id')
    getUser(@Param('id') id: number): Promise<User> {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }
}

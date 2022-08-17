import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) 
        private userReposity: Repository<User>
    ){}

    async createUser(createUserDto: CreateUserDto): Promise<User>{
        return await this.userReposity.save(createUserDto);
    }

    async getUser(id: number): Promise<User> {
        return await this.userReposity.findOne({
            where:{ id }
        });
    }

    async getAllUser(): Promise<User[]>{
        return await this.userReposity.find();
    }
}

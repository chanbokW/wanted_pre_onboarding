import { Notice } from "src/notice/notice.entity";
import { User } from "src/user/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Apply {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, user => user.apply)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Notice, notice => notice.applys)
    @JoinColumn()
    notice: Notice;
}
import { Notice } from "src/notice/notice.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    nation: string;

    @Column()
    area: string;

    @OneToMany(() => Notice, notice => notice.company)
    notices: Notice[];
}
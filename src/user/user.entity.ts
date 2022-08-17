import { Apply } from "src/apply/apply.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(()=> Apply,apply => apply.user)
    apply: Apply;
}
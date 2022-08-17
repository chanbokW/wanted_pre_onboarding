import { Apply } from "src/apply/apply.entity";
import { Company } from "src/company/company.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    position: string;

    @Column()
    compensation: number;

    @Column()
    content: string;

    @Column()
    techstack: string;

    @ManyToOne(() => Company,company => company.notices)
    @JoinColumn({ name: 'company_id' })
    company: Company;

    @OneToMany(() => Apply, apply => apply.notice)
    applys: Apply[];
}
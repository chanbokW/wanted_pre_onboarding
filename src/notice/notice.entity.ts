import { Company } from "src/company/company.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(
        () => Company,
        (company) => company.notices
    )
    @JoinColumn({ name: 'company_id' })
    company: Company;
}
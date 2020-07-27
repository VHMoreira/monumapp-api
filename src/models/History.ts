import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('histories')
export default class History {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp')
  foundation_date: Date;

  @Column()
  origin: string;

  @Column()
  important_facts: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

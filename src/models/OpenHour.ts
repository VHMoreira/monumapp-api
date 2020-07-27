import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import Information from './Information';

@Entity('open_hours')
export default class OpenHour {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  information_id: string;

  @ManyToOne(() => Information, information => information.open_hours)
  information: Information;

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

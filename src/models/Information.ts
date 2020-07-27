import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import OpenHour from './OpenHour';

@Entity('informations')
export default class Information {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => OpenHour, openHour => openHour.information)
  open_hours: OpenHour[];

  @Column()
  description: string;

  @Column()
  enter_price: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

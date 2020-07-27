import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Information from './Information';
import Image from './Image';
import History from './History';

@Entity('monuments')
export default class Monument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Image, image => image.monument)
  images: Image[];

  @Column()
  name: string;

  @Column()
  neighborhood: string;

  @Column()
  information_id: string;

  @OneToOne(() => Information)
  @JoinColumn({ name: 'information_id' })
  information: Information;

  @Column()
  history_id: string;

  @OneToOne(() => History)
  @JoinColumn({ name: 'history_id' })
  history: History;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

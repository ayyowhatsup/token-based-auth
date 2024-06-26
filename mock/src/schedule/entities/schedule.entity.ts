import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'datetime' })
  timeExecute: Date;

  @ManyToOne(() => User, (user) => user.createdSchedules)
  createdBy: User;

  @ManyToMany(() => User)
  @JoinTable()
  recipients: User[];
}

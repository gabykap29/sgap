import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  pass: string;
  @Column()
  names: string;
  @Column()
  lastname: string;
  @Column()
  role: string;
  @Column()
  created_by_id: number;
  @Column({ nullable: true })
  updated_by_id: number;
  @Column({
    nullable: true,
    type: 'datetime',
    default: () => {
      'CURRENT_DATETIME';
    },
  })
  updateAt: Date;
  @Column({
    type: 'datetime',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
  })
  createdAt: Date;
  @Column({ default: true })
  state: boolean;
}

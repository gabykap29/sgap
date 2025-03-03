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
  created_by: string;
  @Column({ nullable: true })
  updated_by: string;
  @Column({
    nullable: true,
    type: 'datetime',
    default: () => {
      'CURRENT_TIMESTAMP';
    },
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @Column({ default: true })
  state: boolean;
}

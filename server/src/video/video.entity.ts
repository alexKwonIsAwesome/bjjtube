import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Comment } from '../comment/comment.entity';
import { User } from '../user/user.entity';

@Entity({
  name: 'Video',
})
export class Video {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  videoUrl: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @OneToMany(type => Comment, comment => comment.video)
  comments: Comment[];

  @ManyToOne(type => User, user => user.videos)
  user: User;
}

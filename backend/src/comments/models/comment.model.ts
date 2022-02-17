import {
  Column,
  Model,
  Table,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Like } from '../../likes/models/like.model';
import { User } from '../../users/models/user.model';

@Table
export class Comment extends Model {
  @Column
  content: string;

  @Column({
    defaultValue: true,
  })
  status: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Comment)
  @Column
  parentId: number;

  @HasMany(() => Comment)
  replies: Comment[];

  @HasMany(() => Like)
  likes: Like[];
}

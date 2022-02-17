import { User } from '../../users/models/user.model';
import {
  Column,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Comment } from 'src/comments/models/comment.model';

@Table
export class Like extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Comment)
  @Column
  commentId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Comment)
  comment: Comment;
}

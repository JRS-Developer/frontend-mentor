import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Like } from '../../likes/models/like.model';
import { Comment } from '../../comments/models/comment.model';

@Table
export class User extends Model {
  @Column({
    allowNull: false,
    unique: true,
  })
  username: string;

  @Column
  image: string;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => Like)
  likes: Like[];
}

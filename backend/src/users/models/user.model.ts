import { Column, Model, Table, HasMany } from 'sequelize-typescript';
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
}

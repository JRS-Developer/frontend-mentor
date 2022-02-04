import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';
import { User } from '../users/models/user.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment)
    private readonly commentModel: typeof Comment,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new this.commentModel(createCommentDto);
    return comment.save();
  }

  findAll(): Promise<Comment[]> {
    return this.commentModel.findAll({
      include: [User],
      raw: true,
      nest: true,
    });
  }

  findOne(id: number): Promise<Comment> {
    return this.commentModel.findByPk(id, {
      include: [User, Comment],
      order: [['createdAt', 'DESC']],
    });
  }

  getCommentsReplies(comments: Comment[]): Comment[] {
    const map: {
      [key: number]: typeof comments[0];
    } = {};

    const result = [];

    comments.forEach((c) => {
      if (c.parentId === null) result.push(c);

      map[c.id] = c;
    });

    comments.forEach((c) => {
      const parent = map[c.parentId];

      if (parent) {
        if (!parent.replies) {
          parent.replies = [];
        }
        parent.replies.push(c);
      }
    });

    return result;
  }

  update(
    id: number,
    updateCommentDto: UpdateCommentDto,
  ): Promise<[number, Comment[]]> {
    return this.commentModel.update(updateCommentDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number): Promise<number> {
    return this.commentModel.destroy({
      where: { id },
    });
  }
}

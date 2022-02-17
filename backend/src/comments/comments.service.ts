import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';
import { User } from '../users/models/user.model';
import { Like } from '../likes/models/like.model';
import { Sequelize } from 'sequelize-typescript';

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
      attributes: {
        include: [[Sequelize.fn('COUNT', Sequelize.col('likes.id')), 'score']],
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
        {
          model: Like,
          attributes: [],
        },
      ],
      raw: true,
      nest: true,
      group: ['Comment.id', 'user.id', 'likes.id'],
      order: [['createdAt', 'ASC']],
      where: {
        status: true,
      },
    });
  }

  findOne(id: number): Promise<Comment> {
    return this.commentModel.findOne({
      include: [User, Comment, Like],
      order: [['createdAt', 'DESC']],
      where: {
        status: true,
        id,
      },
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

  remove(id: number) {
    return this.commentModel.update(
      {
        status: false,
      },
      {
        where: { id },
      },
    );
  }
}

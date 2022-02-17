import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { LikesService } from 'src/likes/likes.service';
import { UsersService } from 'src/users/users.service';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
    private readonly likesService: LikesService,
  ) {}

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    const user = await this.usersService.findOneById(createCommentDto.userId);

    if (!user) {
      throw new NotFoundException(user, 'User not found');
    }

    if (createCommentDto.parentId) {
      const parent = await this.commentsService.findOne(
        createCommentDto.parentId,
      );

      if (!parent) {
        throw new NotFoundException(parent, 'Parent not found');
      }
    }

    return await this.commentsService.create(createCommentDto);
  }

  @Get()
  async findAll() {
    const allComments = await this.commentsService.findAll();
    return this.commentsService.getCommentsReplies(allComments);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const comment = await this.commentsService.findOne(id);

    if (!comment) {
      throw new NotFoundException(comment, 'Comment not found');
    }

    return comment;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    const comment = await this.commentsService.findOne(id);

    if (!comment) {
      throw new NotFoundException(comment, 'Comment not found');
    }

    const [, rows] = await this.commentsService.update(id, updateCommentDto);

    return rows[0];
  }

  @Put(':id/upvote')
  async upvote(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId', ParseIntPipe) userId: number,
  ) {
    const comment = await this.commentsService.findOne(id);
    if (!comment) throw new NotFoundException(comment, 'Comment not found');

    const user = await this.usersService.findOneById(userId);
    if (!user) throw new NotFoundException(user, 'User not found');

    const isUpvoted = await this.likesService.findOne({
      userId,
      commentId: comment.id,
    });

    if (isUpvoted) return { upvoted: false };

    await this.likesService.create({
      userId,
      commentId: comment.id,
    });

    return {
      upvoted: true,
    };
  }

  @Put(':id/downvote')
  async downvote(
    @Param('id', ParseIntPipe) id: number,
    @Body('userId', ParseIntPipe) userId: number,
  ) {
    const comment = await this.commentsService.findOne(id);
    if (!comment) throw new NotFoundException(comment, 'Comment not found');

    const user = await this.usersService.findOneById(userId);
    if (!user) throw new NotFoundException(user, 'User not found');

    const like = await this.likesService.findOne({
      userId,
      commentId: comment.id,
    });

    like && (await this.likesService.remove(like.id));

    return {
      message: 'Comment downvoted',
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.commentsService.remove(id);

    return {
      message: 'Comment deleted',
    };
  }
}

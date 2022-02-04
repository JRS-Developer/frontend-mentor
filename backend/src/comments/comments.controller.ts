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
import { UsersService } from 'src/users/users.service';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService,
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

    const newComment = await this.commentsService.create(createCommentDto);
    return this.findOne(newComment.id);
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
    const [num, rows] = await this.commentsService.update(id, updateCommentDto);

    if (!num) {
      throw new NotFoundException(updateCommentDto, 'Comment not found');
    }

    return rows[0];
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.commentsService.remove(id);

    return {
      message: 'Comment deleted',
    };
  }
}

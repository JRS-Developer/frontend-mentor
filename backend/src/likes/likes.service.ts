import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Like } from './models/like.model';
import { ListOneDto } from './dto/list-one-like.dto';

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like)
    private readonly likesModel: typeof Like,
  ) {}

  findOne(ListOneDto: ListOneDto) {
    return this.likesModel.findOne({
      where: {
        userId: ListOneDto.userId,
        commentId: ListOneDto.commentId,
      },
    });
  }

  create(createLikeDto: CreateLikeDto) {
    const like = new this.likesModel(createLikeDto);
    return like.save();
  }

  remove(id: number) {
    return this.likesModel.destroy({ where: { id } });
  }
}

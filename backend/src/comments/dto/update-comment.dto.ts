import { IntersectionType } from '@nestjs/mapped-types';
import { CreateCommentDto, AdditionalCommentInfo } from './create-comment.dto';

export class UpdateCommentDto extends IntersectionType(
  CreateCommentDto,
  AdditionalCommentInfo,
) {}

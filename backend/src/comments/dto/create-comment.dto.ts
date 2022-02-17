import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsInt()
  @IsOptional()
  parentId?: number;
}

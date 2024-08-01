import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateTaskDto implements Pick<Task, 'title' | 'completed'> {
  @ApiProperty({
    description: 'The title of the task',
    required: false,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Whether the task is complete',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  completed: boolean;
}

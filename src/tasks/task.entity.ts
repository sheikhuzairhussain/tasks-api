import { ApiProperty } from '@nestjs/swagger';
import { Task } from '@prisma/client';

export class TaskEntity implements Task {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  completed: boolean;
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { DBService } from 'src/db/db.service';
import { TaskID } from './tasks.types';

@Injectable()
export class TasksService {
  constructor(private dbService: DBService) {}

  createTask(createTaskDto: CreateTaskDto) {
    return this.dbService.task.create({
      data: createTaskDto,
    });
  }

  getTasks() {
    return this.dbService.task.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  async getTask(id: TaskID) {
    const task = await this.dbService.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async updateTask(id: TaskID, updateTaskDto: CreateTaskDto) {
    await this.getTask(id);
    return await this.dbService.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }

  async deleteTask(id: TaskID) {
    await this.getTask(id);
    return await this.dbService.task.delete({
      where: {
        id,
      },
    });
  }
}

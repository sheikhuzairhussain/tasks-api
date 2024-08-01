import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { TaskID } from './tasks.types';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskEntity } from './task.entity';
import { Task } from '@prisma/client';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new task',
  })
  @ApiBody({
    type: CreateTaskDto,
  })
  @ApiCreatedResponse({
    description: 'Task created successfully',
    type: TaskEntity,
  })
  @ApiBadRequestResponse({
    description: 'Invalid task data',
  })
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all tasks',
  })
  @ApiOkResponse({
    type: [TaskEntity],
  })
  getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a task by ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Task ID',
  })
  @ApiOkResponse({
    type: TaskEntity,
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  getTask(@Param('id') id: TaskID) {
    return this.tasksService.getTask(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a task by ID',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Task ID',
  })
  @ApiBody({
    type: UpdateTaskDto,
  })
  @ApiOkResponse({
    description: 'Task updated successfully',
    type: TaskEntity,
  })
  @ApiBadRequestResponse({
    description: 'Invalid task data',
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  updateTask(@Param('id') id: TaskID, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a task by ID',
  })
  @ApiOkResponse({
    description: 'Task deleted successfully',
  })
  @ApiNotFoundResponse({
    description: 'Task not found',
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Task ID',
  })
  deleteTask(@Param('id') id: TaskID) {
    return this.tasksService.deleteTask(id);
  }
}

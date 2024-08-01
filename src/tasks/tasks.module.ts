import { Module } from '@nestjs/common';
import { DBModule } from 'src/db/db.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [DBModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

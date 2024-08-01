import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

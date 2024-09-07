import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksMiddleware } from './loggin/tasks.middleware';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
})
export class TasksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(TasksMiddleware).forRoutes('tasks');
    }
}

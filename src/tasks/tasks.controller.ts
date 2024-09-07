import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {

    private tasksService: TasksService;

    constructor(taskService: TasksService) {
        this.tasksService = new TasksService();
    }
    
    @Get('/tasks')
    getTasks() {
        return this.tasksService.getTasks();
    }
}

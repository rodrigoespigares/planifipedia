import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { parse } from 'path';
import { CreateTasks } from './dto/create-tasks.dto';
import { PatchTasks } from './dto/patch-tasks.dto';

@Controller('/tasks')
export class TasksController {

    private tasksService: TasksService;

    constructor(taskService: TasksService) {
        this.tasksService = new TasksService();
    }
    
    @Get()
    getTasks(@Query() query: any) {
        return this.tasksService.getTasks(query?.limit);
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        var result = this.tasksService.getTask(parseInt(id)); 
        if (!result) {
            return new NotFoundException('No se encontró la tarea');
        }

        return result;
    }
    @Post()
    createTask(@Body() body: CreateTasks) {
        
        return this.tasksService.createTask(body);
    }
    @Put('/:id')
    updateTask(@Param('id') id: string, @Body() body: CreateTasks) {
        return this.tasksService.updateTask(parseInt(id), body);
    }
    @Patch('/:id')
    modifyTask(@Param('id') id: string, @Body() body: PatchTasks) {
        return this.tasksService.modifyTask(parseInt(id), body.status);
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(parseInt(id));
    }
}

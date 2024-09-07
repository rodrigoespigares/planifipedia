import { Injectable } from "@nestjs/common";
import { CreateTasks } from "./dto/create-tasks.dto";


@Injectable()
export class TasksService {

    private id = 3;
    private tareas: CreateTasks[] = [
        {
            id: 1,
            title: 'Tarea 1',
            description: 'Descripción de la tarea 1',
            priority: 1,
            type: 1,
            status: 'Pendiente',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            title: 'Tarea 2',
            description: 'Descripción de la tarea 2',
            priority: 2,
            type: 2,
            status: 'Pendiente',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    getTasks(limit: number) {
        if (limit) {
            return this.tareas.slice(0, limit);
        }
        return this.tareas;
    }

    getTask(id: number) { 
        return this.tareas.find(tarea => tarea.id === id);
    }

    createTask(data: CreateTasks) {
        data.id = this.id++;
        data.createdAt = new Date();
        data.updatedAt = new Date();
        this.tareas.push(data);
        return 'Creando tarea';
    }

    updateTask(id: number, data: CreateTasks) {
        const index = this.tareas.findIndex(tarea => tarea.id === id);
        if (index === -1) {
            return 'No se encontró la tarea';
        }
        data.id = id;
        data.createdAt = this.tareas[index].createdAt;
        this.tareas[index] = data;
        data.updatedAt = new Date();
        return 'Actualizando tarea';
    }

    modifyTask(id: number, data: boolean) {
        const index = this.tareas.findIndex(tarea => tarea.id === id);
        if (index === -1) {
            return 'No se encontró la tarea';
        }
        this.tareas[index].status = data ? 'Completada' : 'Pendiente';
        return 'Modificando tarea';
    }

    deleteTask(id: number) {
        const index = this.tareas.findIndex(tarea => tarea.id === id);
        if (index === -1) {
            return 'No se encontró la tarea';
        }
        this.tareas.splice(index, 1);
        return 'Eliminando tarea';
    }

}
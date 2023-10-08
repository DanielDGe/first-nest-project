import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {

    tasks: Task[] = [
        {
            id: 1,
            title: "tarea 1",
            description: "some description",
            done: true
        },
        {
            id: 2,
            title: "tarea 2",
            description: "some description 2",
            done: false
        },
        {
            id: 3,
            title: "tarea 3",
            description: "some description 3",
            done: true
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask( id: number ): Task {
        return this.tasks.find(task => task.id === id);
    }

}

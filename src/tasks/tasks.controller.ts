import { Controller, Get, Post, Body, Delete, Param, Put} from '@nestjs/common';
import { createTaskDto } from "./dto/create-task.dto";
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {

    }

    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string) {
        return this.taskService.getTask(parseInt(taskId));
    }

    @Post()
    createTask(@Body() task: createTaskDto): string {
        console.log(task)
        return "creating a task"
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        console.log(id)
        return "delete task"
    }

    @Put(':id')
    updateTask(@Body() task: createTaskDto, @Param('id') id): string {
        return "update task"
    }


}

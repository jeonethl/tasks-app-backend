import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { title } from 'process';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatus } from './dto/update-status.dto';
import { Task } from './task.entity';
import { TaskStatus } from './tasks.models';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {
    }

    @Get("/:id")
    getTasksById(@Param("id") id: string, @GetUser() user: User): Promise<Task> {
        return this.tasksService.getTaskById(id, user);

    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto, @GetUser() user: User): Promise<Task> {
        return this.tasksService.createTask(createTaskDto, user)
    }

    @Delete("/:id")
    deleteTaskById(@Param("id") id: string, @GetUser() user: User): Promise<void> {
        return this.tasksService.deleteTaskById(id, user);
    }
    @Patch("/:id/status")
    updateTaskStatus(
        @Param("id") id: string,
        @Body() updateTaskStatusDto: UpdateTaskStatus,
        @GetUser() user: User
    ): Promise<Task> {
        const { status } = updateTaskStatusDto
        return this.tasksService.updateTaskStatus(id, status, user)
    }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto, @GetUser() user: User): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto, user)
    }

    // @Get("/:id")
    // getTaskById(@Param("id") id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }

    // @Delete("/:id")
    // deleteTaskById(@Param("id") id: string): void {
    //     return this.tasksService.deleteTaskById(id);
    // }

    // @Post()
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto)
    // }

    // @Patch("/:id")
    // updateTaskStatus(
    //     @Param("id") id: string,
    //     @Body() updateTaskStatusDto: UpdateTaskStatus,
    // ): Task {
    //     const { status } = updateTaskStatusDto
    //     return this.tasksService.updateTaskStatus(id, status)
    // }

}


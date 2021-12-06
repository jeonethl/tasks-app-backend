import { GetUser } from "src/auth/get-user.decorator";
import { User } from "src/auth/user.entity";
import { Repository, EntityRepository } from "typeorm"
import { Task } from "../task.entity"
import { TaskStatus } from "../tasks.models";
import { CreateTaskDto } from "./create-task.dto";
import { GetTasksFilterDto } from "./get-tasks-filter.dto";

@EntityRepository(Task)
export class TasksRepository extends Repository<Task>{
    async getTasks(filterDto: GetTasksFilterDto, @GetUser() user: User): Promise<Task[]> {
        const { status, search } = filterDto
        const query = await this.createQueryBuilder("task");
        query.where({ user });
        if (status) {
            query.andWhere("task.status= :status", { status })
            console.log(status)
        }
        if (search) {
            query.where(
                "(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))",
                { search: `%${search}` })
        }

        const tasks = await query.getMany();
        return tasks
    }

    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        const { title, description } = createTaskDto;
        const task = await this.create({
            title,
            description,
            status: TaskStatus.OPEN,
            user,
        });
        await this.save(task);
        return task;
    }
}

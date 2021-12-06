import { IsEnum } from "class-validator"
import { TaskStatus } from "../tasks.models"

export class UpdateTaskStatus {
    @IsEnum(TaskStatus)
    status: TaskStatus
}

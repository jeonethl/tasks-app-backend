import { TaskStatus } from "../tasks.models";
import { IsOptional, IsEnum, IsString } from "class-validator"

export class GetTasksFilterDto {
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
    @IsOptional()
    @IsEnum(TaskStatus)
    @IsString()
    search?: string;
}
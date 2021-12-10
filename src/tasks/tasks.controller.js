"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.TasksController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var get_user_decorator_1 = require("src/auth/get-user.decorator");
var TasksController = /** @class */ (function () {
    function TasksController(tasksService) {
        this.tasksService = tasksService;
    }
    TasksController.prototype.getTasksById = function (id, user) {
        return this.tasksService.getTaskById(id, user);
    };
    TasksController.prototype.createTask = function (createTaskDto, user) {
        return this.tasksService.createTask(createTaskDto, user);
    };
    TasksController.prototype.deleteTaskById = function (id, user) {
        return this.tasksService.deleteTaskById(id, user);
    };
    TasksController.prototype.updateTaskStatus = function (id, updateTaskStatusDto, user) {
        var status = updateTaskStatusDto.status;
        return this.tasksService.updateTaskStatus(id, status, user);
    };
    TasksController.prototype.getTasks = function (filterDto, user) {
        return this.tasksService.getTasks(filterDto, user);
    };
    __decorate([
        (0, common_1.Get)("/:id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksController.prototype, "getTasksById");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksController.prototype, "createTask");
    __decorate([
        (0, common_1.Delete)("/:id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksController.prototype, "deleteTaskById");
    __decorate([
        (0, common_1.Patch)("/:id/status"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, get_user_decorator_1.GetUser)())
    ], TasksController.prototype, "updateTaskStatus");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)()),
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksController.prototype, "getTasks");
    TasksController = __decorate([
        (0, common_1.Controller)('tasks'),
        (0, common_1.UseGuards)((0, passport_1.AuthGuard)())
    ], TasksController);
    return TasksController;
}());
exports.TasksController = TasksController;

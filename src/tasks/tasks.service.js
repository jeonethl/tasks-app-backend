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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.TasksService = void 0;
var common_1 = require("@nestjs/common");
var tasks_repository_1 = require("./dto/tasks.repository");
var typeorm_1 = require("@nestjs/typeorm");
var get_user_decorator_1 = require("src/auth/get-user.decorator");
var TasksService = /** @class */ (function () {
    function TasksService(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    TasksService.prototype.getTaskById = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasksRepository.findOne({ where: { id: id, user: user } })];
                    case 1:
                        found = _a.sent();
                        if (!found) {
                            throw new common_1.NotFoundException;
                        }
                        else {
                            return [2 /*return*/, found];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksService.prototype.createTask = function (createTaskDto, user) {
        return this.tasksRepository.createTask(createTaskDto, user);
    };
    TasksService.prototype.deleteTaskById = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tasksRepository["delete"]({ id: id, user: user })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        if (result.affected === 0) {
                            throw new common_1.NotFoundException("Task with ".concat(id, " not found"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TasksService.prototype.updateTaskStatus = function (id, status, user) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTaskById(id, user)];
                    case 1:
                        task = _a.sent();
                        task.status = status;
                        return [4 /*yield*/, this.tasksRepository.save(task)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, task];
                }
            });
        });
    };
    TasksService.prototype.getTasks = function (filterDto, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.tasksRepository.getTasks(filterDto, user)];
            });
        });
    };
    __decorate([
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksService.prototype, "getTaskById");
    __decorate([
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksService.prototype, "deleteTaskById");
    __decorate([
        __param(2, (0, get_user_decorator_1.GetUser)())
    ], TasksService.prototype, "updateTaskStatus");
    __decorate([
        __param(1, (0, get_user_decorator_1.GetUser)())
    ], TasksService.prototype, "getTasks");
    TasksService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(tasks_repository_1.TasksRepository))
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;

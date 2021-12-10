"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Task = void 0;
var class_transformer_1 = require("class-transformer");
var user_entity_1 = require("src/auth/user.entity");
var typeorm_1 = require("typeorm");
var Task = /** @class */ (function () {
    function Task() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
    ], Task.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Task.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)()
    ], Task.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)()
    ], Task.prototype, "status");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (_type) { return user_entity_1.User; }, function (user) { return user.tasks; }, { eager: false }),
        (0, class_transformer_1.Exclude)({ toPlainOnly: true })
    ], Task.prototype, "user");
    Task = __decorate([
        (0, typeorm_1.Entity)()
    ], Task);
    return Task;
}());
exports.Task = Task;

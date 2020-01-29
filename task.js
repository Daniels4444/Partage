"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("./date");
var priority_1 = require("./priority");
var Task = /** @class */ (function () {
    function Task() {
        this._content = "";
        this._date = new date_1.date();
        this._priority = priority_1.Priority.lower;
        this._checked = false;
    }
    Object.defineProperty(Task.prototype, "content", {
        get: function () {
            return this.content;
        },
        set: function (content) {
            this.content = content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this.date;
        },
        set: function (date) {
            this.date = date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this.priority;
        },
        set: function (priority) {
            this.priority = priority;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        get: function () {
            return this.checked;
        },
        set: function (checked) {
            this.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (content, date, priority) {
    };
    Task.prototype.update = function (content, date, priority) {
        this._content = content;
        this._date = date;
        this._priority = priority;
    };
    Task.prototype.close = function () {
        this._checked = true;
    };
    Task.prototype.toString = function () {
        var etat;
        if (this._checked == false) {
            etat = "Non effectué";
        }
        else {
            etat = "Terminé";
        }
        return ("CONTENU : " + this._content + "\nDATE : " + this._date + "\nPRIORITE : " + this._priority + "\nETAT : ");
    };
    return Task;
}());
exports.Task = Task;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const TODOS = [];
const createTodo = (req, res) => {
    // const title = req.body.title;
    const title = req.body.title;
    const newTodo = new todo_1.default(Math.random().toString(), title);
    TODOS.push(newTodo);
    res.status(201).json({ newTodo });
};
exports.createTodo = createTodo;
const getTodos = (_, res) => {
    return res.json({ todos: TODOS });
};
exports.getTodos = getTodos;

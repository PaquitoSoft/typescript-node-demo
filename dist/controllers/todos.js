"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const TODOS = [];
const createTodo = (req, res) => {
    // const title = req.body.title;
    const title = req.body.title;
    const newTodo = new todo_1.default(Date.now().toString(), title);
    TODOS.push(newTodo);
    res.status(201).json({ newTodo });
};
exports.createTodo = createTodo;
const getTodos = (_, res) => {
    return res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res) => {
    const todoId = req.params.id;
    const updatedTitle = req.body.title;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        TODOS[todoIndex].title = updatedTitle;
    }
    else {
        throw new Error(`Could not find TODO item with id: ${todoId}`);
    }
    res.json({ todo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        TODOS.splice(todoIndex, 1);
    }
    else {
        throw new Error(`Could not find TODO item with id: ${todoId}`);
    }
    res.json({ todosLength: TODOS.length });
};
exports.deleteTodo = deleteTodo;

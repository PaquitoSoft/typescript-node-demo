import { RequestHandler } from "express";
import Todo from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
	// const title = req.body.title;
	const title = (req.body as { title: string }).title;
	const newTodo = new Todo(Math.random().toString(), title);
	TODOS.push(newTodo);
	res.status(201).json({ newTodo });
};

export const getTodos: RequestHandler = (_, res) => {
	return res.json({ todos: TODOS });
}

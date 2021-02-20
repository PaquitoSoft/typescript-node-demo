import { RequestHandler } from "express";
import Todo from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
	// const title = req.body.title;
	const title = (req.body as { title: string }).title;
	const newTodo = new Todo(Date.now().toString(), title);
	TODOS.push(newTodo);
	res.status(201).json({ newTodo });
};

export const getTodos: RequestHandler = (_, res) => {
	return res.json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res) => {
	const todoId = req.params.id;
	const updatedTitle = (req.body as { title: string }).title;
	const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

	if (todoIndex !== -1) {
		TODOS[todoIndex].title = updatedTitle;
	} else {
		throw new Error(`Could not find TODO item with id: ${todoId}`);
	}

	res.json({ todo: TODOS[todoIndex] });
}

export const deleteTodo: RequestHandler<{ id: string }> = (req, res) => {
	const todoId = req.params.id;

	const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

	if (todoIndex !== -1) {
		TODOS.splice(todoIndex, 1);
	} else {
		throw new Error(`Could not find TODO item with id: ${todoId}`);
	}

	res.json({ todosLength: TODOS.length });
}

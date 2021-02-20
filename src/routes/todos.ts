import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todos';

// Hack because of weird error on Express type deifinitions
const router: Router = new (Router as any)();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;

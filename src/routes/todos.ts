import { Router } from 'express';
import { createTodo, getTodos } from '../controllers/todos';

// Hack because of weird error on Express type deifinitions
const router: Router = new (Router as any)();

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id');
router.delete('/:id');

export default router;

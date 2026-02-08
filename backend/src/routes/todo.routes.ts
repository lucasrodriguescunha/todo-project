import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';

const todoRoutes = Router();
const todoController = new TodoController();

todoRoutes.post('/todos', (req, res) =>
  todoController.create(req, res)
);

todoRoutes.get('/todos', (req, res) =>
  todoController.list(req, res)
);

todoRoutes.put('/todos/:id', (req, res) =>
  todoController.update(req, res)
);

todoRoutes.delete('/todos/:id', (req, res) =>
  todoController.delete(req, res)
);

export { todoRoutes };

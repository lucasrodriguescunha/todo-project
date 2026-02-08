import { Request, Response } from 'express';
import { TodoService } from '../services/TodoService';

export class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  public create(req: Request, res: Response): Response {
    try {
      const todo = this.todoService.create(req.body);
      return res.status(201).json(todo);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public list(req: Request, res: Response): Response {
    const todos = this.todoService.list();
    return res.json(todos);
  }

  public update(req: Request, res: Response): Response {
    try {
      const { id } = req.params;
      const todo = this.todoService.update(id, req.body);
      return res.json(todo);
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  public delete(req: Request, res: Response): Response {
    try {
      const { id } = req.params;
      this.todoService.delete(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }
}

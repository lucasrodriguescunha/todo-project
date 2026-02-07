import { Todo } from "../models/Todo";
import { randomUUID } from 'crypto';

export class TodoService {
  private todos: Todo[] = [];

  create(description: string): Todo {
    if (!description || description.trim() === '') {
      throw new Error()
    }
  }
}
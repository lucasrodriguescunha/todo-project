/*
  TodoService
  -----------
  Esta classe representa a camada de serviço (Service Layer) da aplicação.

  Responsabilidades:
  - Implementar as regras de negócio do Todo
  - Criar, listar, atualizar e remover tarefas
  - Garantir a integridade dos dados (ex: descrição obrigatória)

  Observações:
  - Esta camada NÃO conhece HTTP (req, res, status codes)
  - Não depende de Express, Fastify ou qualquer framework web
  - Pode ser reutilizada em controllers, testes ou outros contextos
*/

import { Todo } from '../models/Todo';
import { randomUUID } from 'crypto';
import { CreateTodoDTO } from '../dtos/CreateTodoDTO';

export class TodoService {
  private todos: Todo[] = [];

  public create(data: CreateTodoDTO): Todo {
    const { description } = data;

    if (!description || description.trim() === '') {
      throw new Error('Description is required');
    }

    const now = new Date();

    const todo: Todo = {
      id: randomUUID(),
      description,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };

    this.todos.push(todo);

    return todo;
  }

  public list(): Todo[] {
    return this.todos;
  }

  public update(
    id: string,
    data: Partial<Pick<Todo, 'description' | 'completed'>>
  ): Todo {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    if (data.description !== undefined) {
      todo.description = data.description;
    }

    if (data.completed !== undefined) {
      todo.completed = data.completed;
    }

    todo.updatedAt = new Date();

    return todo;
  }

  public delete(id: string): void {
    const index = this.todos.findIndex(todo => todo.id === id);

    if (index === -1) {
      throw new Error('Todo not found');
    }

    this.todos.splice(index, 1);
  }
}

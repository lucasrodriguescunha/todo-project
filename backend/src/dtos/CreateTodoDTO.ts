/*
  CreateTodoDTO
  -------------
  Define os dados necessários para criar um novo Todo.

  Observações:
  - O cliente informa apenas a descrição
  - Campos como id, completed, createdAt e updatedAt
    são responsabilidade do backend
*/

export interface CreateTodoDTO {
  description: string;
}

/*
  UpdateTodoDTO
  -------------
  Define os dados que podem ser atualizados em um Todo.

  Observações:
  - Todos os campos são opcionais
  - Não permite alterar id ou datas de criação
*/

export interface UpdateTodoDTO {
  description?: string;
  completed?: boolean;
}

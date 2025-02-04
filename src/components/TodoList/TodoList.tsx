import React from 'react'
import { Box } from '@mui/material'
import { TodoItem } from './TodoItem/TodoItem'
import type { Todo } from '../../Types/Todo'
import { EditTodoItem } from './EditTodoItem/EditTodoItem'

interface TodoListProps {
  todoList: Todo[]
  onDeleteTodo: (id: Todo['id']) => void
  onCheckTodo: (id: Todo['id']) => void
  onEditTodo: (id: Todo['id']) => void
  editTodoId: Todo['id'] | null
  onChangeTodo: (
    updatedTodo: Omit<Todo, 'id' | 'checked'>,
    id: Todo['id'],
  ) => void 
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onCheckTodo,
  onEditTodo,
  editTodoId,
  onChangeTodo,
}) => {
  return (
    <Box>
      {todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return (
            <EditTodoItem
              key={todo.id}
              todo={todo}
              onChangeTodo={(updatedTodo) => onChangeTodo(updatedTodo, todo.id)} 
            />
          )
        } else {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onCheckTodo={onCheckTodo}
              onEditTodo={onEditTodo}
            />
          )
        }
      })}
    </Box>
  )
}

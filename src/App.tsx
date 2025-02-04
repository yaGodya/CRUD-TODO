import React from 'react'
import { Box } from '@mui/material'
import { Header, Panel, TodoList } from './components'

import './App.css'
import { Todo } from './Types/Todo'
import { initialTodos } from './Types/State'

export const App = () => {
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null)
  const [todoList, setTodoList] = React.useState<Todo[]>(initialTodos)
  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const onEditTodo = (id: Todo['id']) => {
    setEditTodoId(id)
  }

  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    const newId =
      todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) + 1 : 1

    setTodoList([...todoList, { id: newId, name, description, checked: false }])
  }
  const onChangeTodo = ({
    name,
    description,
  }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description }
        }
        return todo
      }),
    )
    setEditTodoId(null)
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    )
  }

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width={550}>
        <Header />

        <Panel onAddTodo={onAddTodo} />

        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEditTodo={onEditTodo}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </div>
  )
}

import React from 'react'
import { Box } from '@mui/material'
import { Header, Panel, TofoList } from './components'

import './App.css'
import { Todo } from './Types/Todo'


export const App = () => {
  const [editTodoId, setEditTodoId] = React.useState < number | null>(null)


  const [todoList, setTodoList] = React.useState([
    { id: 1, name: 'task 1', description: 'first', checked: false },
    { id: 2, name: 'task 2', description: 'second', checked: false },
    {
      id: 3,
      name: 'task ',
      description: 'third sdfsdf dsfsdf sfdsfs',
      checked: false,
    },
  ])
  const onDeleteTodo = (id: Todo['id']) => {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  const onEditTodo = (id: Todo['id']) => {
    setEditTodoId(id)
  }


  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        description,
        name,
        checked: false,
      },
    ])
  }
  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description }
        }
        return todo
      })
    )
    setEditTodoId(null)
  }

  const onCheckTodo = (id: Todo['id']) => { 
      setTodoList(todoList.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width={550}>
        <Header />
        <Panel onAddTodo={onAddTodo} />
        <TofoList
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

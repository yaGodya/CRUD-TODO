import React from 'react'
import { Paper,Button, TextField} from '@mui/material'
import { Edit as EditIcon } from '@mui/icons-material'
import type { Todo } from '../../../Types/Todo'


interface EditTodoItemProps {
  todo: Todo
  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void
}


export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = React.useState({name: todo.name, description: todo.description})

  const onClick = () => { 
    onChangeTodo(editTodo)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setEditTodo((prevTodo) => ({ ...prevTodo, [name]: value }))
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: '24px 32px',
        width: '100%',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        marginBottom: 1,
      }}
    >
      <TextField
        name="name"
        value={editTodo.name}
        onChange={onChange}
        label="Name"
        fullWidth
      />

      <TextField
        name="description"
        value={editTodo.description}
        onChange={onChange}
        label="Description"
        fullWidth
      />

      <Button startIcon={<EditIcon />} variant="outlined" onClick={onClick}>
        Edit
      </Button>
    </Paper>
  )
}

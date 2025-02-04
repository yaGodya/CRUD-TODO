import React from 'react'
import { Box, Paper, Typography, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import type { Todo } from '../../../Types/Todo'
import Checkbox from '@mui/material/Checkbox'

interface TodoItemProps {
  todo: Todo
  onDeleteTodo: (id: Todo['id']) => void
  onCheckTodo: (id: Todo['id']) => void
  onEditTodo: (id: Todo['id']) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDeleteTodo,
  onCheckTodo,
  onEditTodo,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: '12px 32px',
        width: '100%',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        marginBottom: 0.4,
        opacity: todo.checked ? 0.5 : 1,
      }}
    >
      <Box textAlign={'left'} maxWidth={400}>
        <Typography
          sx={{
            color: todo.checked ? '#DB3821' : '#DBA91F',
            cursor: 'pointer',
            textDecoration: todo.checked ? 'line-through' : 'none',
          }}
          variant="h4"
          component="h4"
        >
          {todo.name}
        </Typography>

        <Typography
          sx={{
            color: todo.checked ? '#DB3821' : '#000000',
          }}
          variant="subtitle1"
          component="div"
        >
          {todo.description}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton aria-label="edit" onClick={() => onEditTodo(todo.id)}>
          <EditIcon color="primary" />
        </IconButton>

        <Checkbox
          defaultChecked
          color="success"
          onClick={() => onCheckTodo(todo.id)}
        />

        <IconButton aria-label="delete" onClick={() => onDeleteTodo(todo.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
    </Paper>
  )
}

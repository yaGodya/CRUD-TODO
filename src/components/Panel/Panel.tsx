import React, { useState } from 'react'
import { TextField, Paper, Button, Box, CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import type { Todo } from '../../Types/Todo'

const DEFAULT_TODO = {
  name: '',
  description: '',
}

interface PanelProps { 
  onAddTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const Panel: React.FC<PanelProps> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO)
  const [loading, setLoading] = useState(false)

  const onClick = () => {
    setLoading(true)
    onAddTodo(todo)

    setTimeout(() => {
      setTodo(DEFAULT_TODO)
      setLoading(false)
    }, 500)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }))
  }

  const isButtonDisabled =
    loading || !todo.name.trim() || !todo.description.trim() 

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
        value={todo.name}
        onChange={onChange}
        label="Name"
        fullWidth
      />

      <TextField
        name="description"
        value={todo.description}
        onChange={onChange}
        label="Description"
        fullWidth
      />

      <Box>
        <Button
          variant="outlined"
          startIcon={loading ? <CircularProgress size={20} /> : <Add />}
          onClick={onClick}
          disabled={isButtonDisabled}
        >
          {loading ? 'Add' : 'Add'}
        </Button>
      </Box>
    </Paper>
  )
}

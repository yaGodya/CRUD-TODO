import React from 'react'
import { Box, Typography } from '@mui/material'
import './Header.css'

export const Header = () => {
  return (
    <Box textAlign={'left'}>
      <Typography sx={{ fontSize: 40 }} variant="h1" component="h2">
        Todo List
      </Typography>
    </Box>
  )
}

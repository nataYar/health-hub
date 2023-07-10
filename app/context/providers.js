'use client'
 
import { UserProvider  } from './userProvider'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../theme/index';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function Providers({ children }) {
  const theme = createTheme();

  return (
    <>
    <ThemeProvider theme={theme}>
      <UserProvider >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
      </UserProvider >
    </ThemeProvider>
    </>

  )
}
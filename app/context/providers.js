'use client'
 
import { UserProvider  } from './userProvider'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../theme/index';
 
export function Providers({ children }) {
  const theme = createTheme();

  return (
    <>
    <ThemeProvider theme={theme}>
      <UserProvider >
      {children}
      </UserProvider >
    </ThemeProvider>
    </>

  )
}
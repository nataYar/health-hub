import { Inter } from 'next/font/google';
import Nav from './nav/nav';
import { Providers } from './context/providers';
import './styles/globals.css';
import Wrapper from '@/components/Wrapper';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Health Hub',
  description: 'Track your health from everywhere',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          <Wrapper>
          {children}
          </Wrapper>
          </Providers>
        </body>
    </html>
  )
}

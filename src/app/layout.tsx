import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '@/component/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/component/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FRUITSFRESH.COM',
  description: ' | order fresh fruits online.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

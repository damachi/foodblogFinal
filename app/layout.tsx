"use client"
import './globals.css'
import { ChakraProvider, Box } from "@chakra-ui/react"
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <ChakraProvider>
          <Box display="flex" flexDirection="column">
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  )
}

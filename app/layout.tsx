"use client"
import './globals.css'
import { ChakraProvider } from "@chakra-ui/react"
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
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </ChakraProvider></body>
    </html>
  )
}

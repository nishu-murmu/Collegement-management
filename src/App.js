import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'

//files
import MainSection from './components/MainSection'
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderSection />
        <MainSection />
        <FooterSection />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App

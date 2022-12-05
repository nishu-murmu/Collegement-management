import React from 'react'
import { Stack } from '@chakra-ui/react'

const DashBoard = () => {


  const arr = ["test","name","please"]
  return <Stack>

    {
    arr.map(item => (
    <Stack>{item}</Stack>
    ))
  }
  </Stack>
}

export default DashBoard

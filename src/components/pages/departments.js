import React from 'react'
import {
  Stack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
} from '@chakra-ui/react'

const Departments = () => {
  return (
    <Stack paddingX={'200px'} marginTop={'100'}>
      <Heading as={'h1'} size={'lg'}>Departments:</Heading>
      <OrderedList padding={'10px'}>
        <ListItem>Computers</ListItem>
        <ListItem>IT</ListItem>
        <ListItem>EC</ListItem>
      </OrderedList>
    </Stack>
  )
}

export default Departments

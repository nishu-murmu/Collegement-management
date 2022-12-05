import React from 'react'
import { Button, Flex, Heading, Stack, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { ColorModeSwitcher } from '../ColorModeSwitcher.js'

const HeaderSection = () => {
  return (
    <Stack>
      <Flex justifyContent={'space-between'} px={'12'} mt={4}>
        <Heading as={'h2'} size='xl'>
          College Name
        </Heading>
        <HStack mr={28}>
          <Link to='/departments'>
            <Button>Departments</Button>
          </Link>
          <Link to='/students'>
            <Button>Students</Button>
          </Link>
          <Link to='/dashboard'>
            <Button>Dashboard</Button>
          </Link>
        </HStack>
        <ColorModeSwitcher justifySelf='flex-end' />
      </Flex>
    </Stack>
  )
}

export default HeaderSection

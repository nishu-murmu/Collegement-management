import React, { useState, useEffect } from 'react'
import {
  Stack,
  Text,
  Tooltip,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Heading,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  Input,
  useDisclosure,
  Radio,
  RadioGroup,
  VStack,
} from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const Students = () => {
  const studentslist = [
    {
      name: 'Naman',
      enrollId: 123,
      year: '2017',
      fees: 'yes',
    },
    {
      name: 'Naman',
      enrollId: 345,
      year: '2017',
      fees: 'yes',
    },
    {
      name: 'Naman',
      enrollId: 546,
      year: '2017',
      fees: 'yes',
    },
  ]

  const [name, setname] = useState('')
  const [enroll, setEnroll] = useState('')
  const [year, setYear] = useState('')
  const [fees, setFees] = useState(false)
  const [students, setStudents] = useState(studentslist)
  const [editedId, setEditedId] = useState('')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure()

  const addStudents = () => {
    const studentDetails = {
      name: name,
      enrollId: enroll,
      year: year,
      fees: fees,
    }
    setStudents(prevState => [...prevState, studentDetails])
  }
  const editStudent = id => {
    const studentDetails = {
      name: name,
      enrollId: enroll,
      year: year,
      fees: fees,
    }
    const editedStudentsList = students.map(item => {
      if (item.enrollId === id) return studentDetails
      else return item
    })
    setStudents(editedStudentsList)
  }
  const deleteStudent = id => {
    const filteredList = students.filter(item => {
      return item.enrollId !== id
    })
    setStudents(filteredList)
  }

  useEffect(() => { }, [students])

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Flex width={'1000px'} mt='100px'>
        <Tooltip hasArrow label={'Add Student'} bg='gray.300' color='black'>
          <Button onClick={onOpen} marginLeft={'10px'}>
            <BsPlus />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add Student</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack>
                    <Input
                      onChange={e => setname(e.target.value)}
                      placeholder='Enter Name'
                    />
                    <Input
                      onChange={e => setEnroll(e.target.value)}
                      placeholder='Enter Enrollment No'
                    />
                    <Input
                      onChange={e => setYear(e.target.value)}
                      placeholder='Enter Year'
                    />
                    <Flex justifyContent={'space-evenly'} width={'100%'}>
                      <Heading as={'h4'} size={'sm'} mt={'1px'}>
                        Fees:
                      </Heading>
                      <Stack spacing={'4'} direction={'row'}>
                        <RadioGroup marginRight={'5'} width={'100%'}>
                          <Radio
                            px={2}
                            value='1'
                            onChange={() => setFees(true)}
                          >
                            Yes
                          </Radio>
                          <Radio
                            px={2}
                            value='2'
                            onChange={() => setFees(false)}
                          >
                            No
                          </Radio>
                        </RadioGroup>
                      </Stack>
                    </Flex>
                  </VStack>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      addStudents()
                      onClose()
                    }}
                    colorScheme={'green'}
                    variant='ghost'
                  >
                    Add
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Button>
        </Tooltip>
        <Heading marginLeft={'260px'} as={'h1'} size={'lg'}>
          Number of Students
        </Heading>
      </Flex>
      <TableContainer
        rounded={'lg'}
        boxShadow={'lg'}
        overflowY={'auto'}
        overflowX={'hidden'}
        mt={'10'}
      >
        <Table size={'lg'} variant={'simple'}>
          <Thead position={'sticky'} top={0}>
            <Tr>
              <Th>
                <Checkbox size={'lg'} colorScheme={'green'} />
              </Th>
              <Th>Name</Th>
              <Th>Enrollment No.</Th>
              <Th>Year</Th>
              <Th>Fees</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map(item => (
              <Tr id={item.enrollId}>
                <Td>
                  <Checkbox size={'lg'} />
                </Td>
                <Td>{item.name}</Td>
                <Td>{item.enrollId}</Td>
                <Td>{item.year}</Td>
                <Td>{item.fees ? 'Yes' : 'No'}</Td>
                <Td>
                  <Button onClick={() => {
                    editOnOpen()
                    setEditedId(item.enrollId)
                  }}>
                    <Modal isOpen={editIsOpen} onClose={editOnClose}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Edit Student</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <VStack>
                            <Input
                              onChange={e => setname(e.target.value)}
                              placeholder='Enter Name'
                            />
                            <Input
                              onChange={e => setEnroll(e.target.value)}
                              placeholder='Enter Enrollment No'
                            />
                            <Input
                              onChange={e => setYear(e.target.value)}
                              placeholder='Enter Year'
                            />
                            <Flex
                              justifyContent={'space-evenly'}
                              width={'100%'}
                            >
                              <Heading as={'h4'} size={'sm'} mt={'1px'}>
                                Fees:
                              </Heading>
                              <Stack spacing={'4'} direction={'row'}>
                                <RadioGroup marginRight={'5'} width={'100%'}>
                                  <Radio
                                    px={2}
                                    value='1'
                                    onChange={() => setFees(true)}
                                  >
                                    Yes
                                  </Radio>
                                  <Radio
                                    px={2}
                                    value='2'
                                    onChange={() => setFees(false)}
                                  >
                                    No
                                  </Radio>
                                </RadioGroup>
                              </Stack>
                            </Flex>
                          </VStack>
                        </ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme='blue'
                            mr={3}
                            onClick={editOnClose}
                          >
                            Close
                          </Button>
                          <Button
                            onClick={() => {
                              editStudent(editedId)
                              editOnClose()
                            }}
                            colorScheme={'green'}
                            variant='ghost'
                          >
                            Edit
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                    <AiFillEdit />
                  </Button>
                </Td>
                <Td>
                  <Button onClick={() => deleteStudent(item.enrollId)}>
                    <AiFillDelete />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

export default Students

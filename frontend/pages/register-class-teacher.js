import {
	Box,
	Container,
	Heading,
	VStack,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Button,
} from '@chakra-ui/react'

const RegisterClassTeacher = () => {
	return (
		<Box as='main'>
			<Container maxW='container.lg'>
				<Heading mt={8}>Register Class Teacher</Heading>
				<VStack spacing={12} my={8}>
					<Box>
						<Heading size='md' mb={4}>
							Semester 1
						</Heading>
						<Box w='4xl' border='1px' borderColor='gray.300'>
							<Table variant='simple'>
								<Thead>
									<Tr>
										<Th>Class</Th>
										<Th>Subject</Th>
										<Th>Action</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Class 1</Td>
										<Td>Subject 1</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 2</Td>
										<Td>Subject 1</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 3</Td>
										<Td>Subject 1</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 4</Td>
										<Td>Subject 1</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</Box>
					</Box>

					<Box>
						<Heading size='md' mb={4}>
							Semester 4
						</Heading>
						<Box w='4xl' border='1px' borderColor='gray.300'>
							<Table variant='simple'>
								<Thead>
									<Tr>
										<Th>Class</Th>
										<Th>Subject</Th>
										<Th>Action</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Class 1</Td>
										<Td>Subject 5</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 2</Td>
										<Td>Subject 5</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 3</Td>
										<Td>Subject 5</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
									<Tr>
										<Td>Class 4</Td>
										<Td>Subject 5</Td>
										<Td>
											<Button colorScheme='yellow' size='sm'>
												Register
											</Button>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</Box>
					</Box>
				</VStack>
			</Container>
		</Box>
	)
}

export default RegisterClassTeacher

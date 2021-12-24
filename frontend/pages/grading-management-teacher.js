import {
	Box,
	HStack,
	Select,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Input,
	ButtonGroup,
	Button,
	Container,
	Heading,
} from '@chakra-ui/react'

const GradingManagementTeacher = () => {
	return (
		<Box as='main'>
			<Container maxW='container.md'>
				<Heading mt={8}>Grading Management Teacher</Heading>
				<Box my={8}>
					<Box>
						<HStack mb={6} justify='end'>
							<Select placeholder='Class' w={28}>
								<option value='option1'>Class 1</option>
								<option value='option2'>Class 2</option>
								<option value='option3'>Class 5</option>
							</Select>
						</HStack>
						<Box border='1px' borderColor='gray.300' mb={6}>
							<Table variant='simple'>
								<Thead>
									<Tr>
										<Th>Student Name</Th>
										<Th>Grade</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Student 1 Name</Td>
										<Td>
											<Input value='A' size='sm' w={20}></Input>
										</Td>
									</Tr>
									<Tr>
										<Td>Student 2 Name</Td>
										<Td>
											<Input value='A' size='sm' w={20}></Input>
										</Td>
									</Tr>
									<Tr>
										<Td>Student 3 Name</Td>
										<Td>
											<Input value='B' size='sm' w={20}></Input>
										</Td>
									</Tr>
									<Tr>
										<Td>Student 4 Name</Td>
										<Td>
											<Input value='A' size='sm' w={20}></Input>
										</Td>
									</Tr>
									<Tr>
										<Td>Student 5 Name</Td>
										<Td>
											<Input value='C' size='sm' w={20}></Input>
										</Td>
									</Tr>
									<Tr>
										<Td>Student 6 Name</Td>
										<Td>
											<Input value='E' size='sm' w={20}></Input>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</Box>
						<HStack justify='end'>
							<ButtonGroup spacing={4}>
								<Button colorScheme='blue'>Add</Button>
								<Button colorScheme='yellow'>Edit</Button>
								<Button colorScheme='red'>Delete</Button>
							</ButtonGroup>
						</HStack>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default GradingManagementTeacher

import {
	Box,
	Container,
	Center,
	Heading,
	FormControl,
	FormLabel,
	Input,
	VStack,
	ButtonGroup,
	Button,
	HStack,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from '@chakra-ui/react'

const SubjectManagement = () => {
	return (
		<Box as='main'>
			<Container maxW='container.xl'>
				<Center my={10}>
					<VStack w='xl' spacing={5}>
						<Heading mb={4}>Subject Management</Heading>
						<VStack w='md'>
							<FormControl id='subject-name'>
								<FormLabel>Subject Name</FormLabel>
								<Input type='text' />
							</FormControl>
							<FormControl id='subject-credit'>
								<FormLabel>Credit</FormLabel>
								<Input type='number' />
							</FormControl>
							<HStack justify='end' w='100%' pt={2}>
								<ButtonGroup spacing='6'>
									<Button colorScheme='blue'>Add</Button>
									<Button colorScheme='yellow'>Edit</Button>
									<Button colorScheme='red'>Delete</Button>
								</ButtonGroup>
							</HStack>
						</VStack>
						<Box w='100%' border='1px' borderColor='gray.300'>
							<Table variant='simple'>
								<Thead>
									<Tr>
										<Th>Subject</Th>
										<Th>Credit</Th>
									</Tr>
								</Thead>
								<Tbody>
									<Tr>
										<Td>Subject 1</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 2</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 3</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 4</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 5</Td>
										<Td>2</Td>
									</Tr>
									<Tr>
										<Td>Subject 6</Td>
										<Td>2</Td>
									</Tr>
									<Tr>
										<Td>Subject 7</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 8</Td>
										<Td>3</Td>
									</Tr>
									<Tr>
										<Td>Subject 9</Td>
										<Td>3</Td>
									</Tr>
								</Tbody>
							</Table>
						</Box>
					</VStack>
				</Center>
			</Container>
		</Box>
	)
}

export default SubjectManagement

import {
	Box,
	VStack,
	Heading,
	Input,
	Button,
	InputGroup,
	InputRightElement,
	Container,
	Text,
} from '@chakra-ui/react'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Landing = () => {
	const [show, setShow] = useState(false)
	const router = useRouter()

	const handleClick = () => setShow((prev) => !show)

	const handleLogin = (e) => {
		e.preventDefault()

		router.replace('/menu-control')
	}
	return (
		<Box as='main'>
			<Container as='section' centerContent>
				<VStack h='100vh' justify='center' spacing={8}>
					<Box
						maxW='md'
						border='1px'
						borderColor='gray.300'
						px={4}
						py={8}
						w='xl'
						borderRadius='md'
					>
						<VStack>
							<Heading mb={4}>Login</Heading>
							<VStack as='form' spacing={5} w='100%' onSubmit={handleLogin}>
								<Input placeholder='ID' required />
								<InputGroup>
									<Input
										pr='4.5rem'
										type={show ? 'text' : 'password'}
										placeholder='Enter password'
										required
									/>
									<InputRightElement width='4.5rem'>
										<Button h='1.75rem' size='sm' onClick={handleClick}>
											{show ? 'Hide' : 'Show'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<Button w='100%' colorScheme='blue' type='submit'>
									Login
								</Button>
							</VStack>
						</VStack>
					</Box>
					<Text fontSize={17}>
						If you haven&#8216;t registered yet,{' '}
						<Link color='red.800' href='/register' passHref>
							<Text as='span' textDecoration='underline' cursor='pointer'>
								click here.
							</Text>
						</Link>
					</Text>
				</VStack>
			</Container>
		</Box>
	)
}

export default Landing

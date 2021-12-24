import { useState } from 'react'
import { Box, Container, Center, HStack } from '@chakra-ui/react'
import RegisterCard from '../../components/Register/RegisterCard'

const Register = () => {
	const [visible, setVisible] = useState(true)

	return (
		<Box as='main'>
			<Container maxW='container.xl'>
				<Center h='100vh'>
					<HStack spacing={10}>
						<RegisterCard title='Student' />
						<RegisterCard title='Teacher' />
					</HStack>
				</Center>
			</Container>
		</Box>
	)
}

export default Register

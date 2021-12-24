import { Box, Container } from '@chakra-ui/react'
import StudentForm from '../../components/Register/StudentForm'

const Student = () => {
	return (
		<Box as='main'>
			<Container maxW='container.xl'>
				<StudentForm />
			</Container>
		</Box>
	)
}

export default Student

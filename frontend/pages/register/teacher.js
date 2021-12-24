import { Box, Container } from '@chakra-ui/react'
import TeacherForm from '../../components/Register/TeacherForm'

const Student = () => {
	return (
		<Box as='main'>
			<Container maxW='container.xl'>
				<TeacherForm />
			</Container>
		</Box>
	)
}

export default Student

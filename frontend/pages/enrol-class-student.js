import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import EnrolClassStudentCard from '../components/EnrolClassStudentCard'

const EnrollClassStudent = () => {
	return (
		<Box as='main'>
			<Container maxW='container.xl'>
				<Heading mt={8}>Enroll Class Student</Heading>
				<SimpleGrid spacing={12} columns={{ base: 1, md: 2 }} my={8}>
					<EnrolClassStudentCard />
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default EnrollClassStudent

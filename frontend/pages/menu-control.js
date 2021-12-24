import { Box, Container, SimpleGrid, Center } from '@chakra-ui/react'
import MenuControlCard from '../components/MenuControlCard'

import { useState } from 'react'

const Menu = () => {
	const [controls, _] = useState([
		{ text: 'Enroll Class Student', params: 'enrol-class-student' },
		{ text: 'Register Class Teacher', params: 'register-class-teacher' },
		{
			text: 'Grading Management Teacher',
			params: 'grading-management-teacher',
		},
		{ text: 'Report Complaint', params: 'report-complaint' },
		{ text: 'Subject Management', params: 'subject-management' },
	])
	return (
		<Box>
			<Container maxW='container.xl'>
				<Center h='100vh'>
					<SimpleGrid columns={2} spacing={12}>
						<MenuControlCard controls={controls} />
					</SimpleGrid>
				</Center>
			</Container>
		</Box>
	)
}

export default Menu

import {
	Table,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Tfoot,
	Box,
	Button,
	Heading,
} from '@chakra-ui/react'

import { useState } from 'react'
import { packagesArr } from '../helper'
import { useRouter } from 'next/router'

const EnrolClassStudentCard = () => {
	const [packages, _] = useState(packagesArr)
	const router = useRouter()

	const handleEnroll = () => {
		router.replace('/menu-control')
	}

	return (
		<>
			{packages.map((enrol) => (
				<Box key={enrol.class}>
					<Heading size='md' mb={4}>
						Class {enrol.class}
					</Heading>
					<Box border='1px' borderColor='gray.200'>
						<Table variant='simple'>
							<Thead>
								<Tr>
									<Th>Subject</Th>
									<Th>Credit</Th>
								</Tr>
							</Thead>
							<Tbody>
								{enrol.subjects.map((subject) => (
									<Tr key={subject.name}>
										<Td>{subject.name}</Td>
										<Td>{subject.credit}</Td>
									</Tr>
								))}
							</Tbody>
							<Tfoot>
								<Tr>
									<Th>
										<Button
											w='full'
											colorScheme='yellow'
											onClick={handleEnroll}
										>
											Enroll
										</Button>
									</Th>
								</Tr>
							</Tfoot>
						</Table>
					</Box>
				</Box>
			))}
		</>
	)
}

export default EnrolClassStudentCard

import { Center, Heading } from '@chakra-ui/react'
import Link from 'next/link'

const RegisterCard = ({ title }) => {
	const params = title.toLowerCase()

	return (
		<Link href={`/register/${params}`} passHref>
			<Center
				border='1px'
				borderColor='gray.200'
				w='md'
				py={24}
				cursor='pointer'
				borderRadius='md'
				boxShadow='base'
				_hover={{
					boxShadow: 'md',
				}}
			>
				<Heading size='lg'>{title} Registration</Heading>
			</Center>
		</Link>
	)
}

export default RegisterCard

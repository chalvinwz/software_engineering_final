import { Square, Text } from '@chakra-ui/react'
import Link from 'next/link'

const MenuControlCard = ({ controls }) => {
	return (
		<>
			{controls.map((control) => (
				<Link href={`/${control.params}`} passHref key={control.params}>
					<Square
						border='1px'
						borderColor='gray.300'
						px={4}
						py={8}
						w='sm'
						borderRadius='md'
						cursor='pointer'
						boxShadow='base'
						_hover={{
							boxShadow: 'md',
						}}
					>
						<Text fontSize={24}>{control.text}</Text>
					</Square>
				</Link>
			))}
		</>
	)
}

export default MenuControlCard

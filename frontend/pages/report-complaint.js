import {
	Box,
	Container,
	Center,
	VStack,
	Heading,
	Input,
	Textarea,
	Button,
} from '@chakra-ui/react'

const ReportComplaint = () => {
	return (
		<Box>
			<Container maxW='container.xl'>
				<Center h='100vh'>
					<VStack
						as='form'
						border='1px'
						borderColor='gray.300'
						py={4}
						px={8}
						spacing={5}
						borderRadius='md'
						w='md'
					>
						<Heading mb={4}>Report Complaint</Heading>
						<Input placeholder='Header' />
						<Textarea placeholder='Body' h={36} />
						<Button w='100%' colorScheme='blue'>
							Send
						</Button>
					</VStack>
				</Center>
			</Container>
		</Box>
	)
}

export default ReportComplaint

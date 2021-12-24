import {
	Input,
	Button,
	VStack,
	FormControl,
	FormLabel,
	RadioGroup,
	HStack,
	Radio,
	Container,
	Center,
	Heading,
	Select,
	useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'

const schema = yup
	.object()
	.shape({
		name: yup.string().required(),
		dob: yup.string().required(),
		email: yup.string().required(),
		phone: yup.string().required(),
		gender: yup.string().required(),
		address: yup.string().required(),
		subject_specialty: yup.string().required(),
	})
	.required()

const StudentForm = () => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema),
	})

	const router = useRouter()
	const toast = useToast()

	const onSubmit = (data) => {
		postData(data)

		router.push('/')
		toast({
			title: 'Success.',
			description: 'Wait for the confirmation via email.',
			status: 'success',
			duration: 9000,
			isClosable: true,
		})
	}

	const postData = async (data) => {
		await axios.post('http://localhost:5000/teacher', data)
	}

	return (
		<Container maxW='container.xl'>
			<Center h='100vh'>
				<VStack
					as='form'
					spacing={5}
					w='md'
					border='1px'
					borderColor='gray.300'
					py={4}
					px={8}
					borderRadius='md'
					onSubmit={handleSubmit(onSubmit)}
				>
					<Heading mb={4}>Register Teacher</Heading>
					<Input placeholder='Name' {...register('name')} />
					<Input placeholder='Date of Birth' {...register('dob')} />
					<Input placeholder='Email' {...register('email')} />
					<Input placeholder='Phone' {...register('phone')} />
					<FormControl as='fieldset'>
						<FormLabel as='legend'>Gender</FormLabel>
						<RadioGroup>
							<HStack spacing='24px'>
								<Radio value='Male' {...register('gender')}>
									Male
								</Radio>
								<Radio value='Female' {...register('gender')}>
									Female
								</Radio>
							</HStack>
						</RadioGroup>
					</FormControl>
					<Input placeholder='Address' {...register('address')} />
					<Select
						placeholder='Subject Specialty'
						{...register('subject_specialty')}
					>
						<option value='Biology'>Biology</option>
						<option value='Art'>Art</option>
						<option value='Physical education'>Physical Education</option>
						<option value='Physics'>Physics</option>
						<option value='Mathematics education'>Mathematics</option>
					</Select>
					<Button type='submit' colorScheme='blue' w='100%'>
						Submit
					</Button>
				</VStack>
			</Center>
		</Container>
	)
}

export default StudentForm

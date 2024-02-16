import { useForm } from 'react-hook-form'
import Layout from '../../layout/layout'
import Button from '../../ui/buttons/button'
import Field from '../../ui/fields/field'

import { useState } from 'react'
import Loader from '../../ui/Loader'
import styles from './auth.module.scss'

const isLoading = false
const isLoadingAuth = false

const Auth = () => {
	const [type, setType] = useState('auth')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<>
			<Layout heading='SING IN' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is required'
						}}
						type='email'
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is required'
						}}
						type='password'
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Let`s go</Button>
						<Button clickHandler={() => setType('reg')}>Let`s go</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth

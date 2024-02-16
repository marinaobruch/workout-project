import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/layout'
import Button from '../../ui/buttons/button'
import styles from './home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<>
			<Layout bgImage='/images/home-bg.jpg'>
				<Button
					clickHandler={() => navigate(isAuth ? '/new-workout' : './auth')}
				>
					{isAuth ? 'New' : 'Sing in'}
				</Button>
				<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			</Layout>
		</>
	)
}

export default Home

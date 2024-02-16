import { CiUser } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/hamburger'
import styles from './header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<FaArrowLeft fill='#fff' fontSize={30} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<CiUser fill='#fff' fontSize={30} />
				</button>
			)}
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header

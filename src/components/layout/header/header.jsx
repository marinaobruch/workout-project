import { FaArrowLeft } from 'react-icons/fa6'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/hamburger'
import styles from './header.module.scss'

const Header = () => {
	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FaArrowLeft fill='#fff' fontSize={30} />
			</button>
			{/* User profile */}
			<Hamburger />
		</header>
	)
}

export default Header

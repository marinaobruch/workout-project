import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import styles from './hamburger.module.scss'
import Menu from './menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				{isShow ? <AiOutlineClose /> : <AiOutlineMenu />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger

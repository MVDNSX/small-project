import { Link } from 'react-router-dom'
import { SvgIcon } from '../Svg/SvgIcon'
import {motion} from 'framer-motion'

export const SidebarItem = ({item, isSelected, handleClick}) => {
	return (
		<li className={`nav__item ${item}`} onClick={handleClick}>
				<Link to={`/${item}`} className='nav__link'>
					<SvgIcon id={item} isSelected={isSelected}/>
					{isSelected 
					? <motion.div className='nav__selected-bg' layoutId='underline'><div className="nav__selected"></div></motion.div>
					: null}
				</Link>
		</li>
	)
}
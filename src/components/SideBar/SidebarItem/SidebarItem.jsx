import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../Svg/SvgIcon'

import c from './SidebarItem.module.scss'

export const SidebarItem = ({item, isSelected, handleClick}) => {
	return (
		<li className={!isSelected ? `${c.item}` : `${c.item} ${c.active}`} onClick={handleClick}>
				<Link to={`/${item}`} className={c.link}>
					<SvgIcon id={item}/>
					{isSelected 
					? <motion.div 
							className={c.selected_bg} layoutId='underline'>
								<div className={c.selected}></div>
						</motion.div>
					: null}
				</Link>
		</li>
	)
}
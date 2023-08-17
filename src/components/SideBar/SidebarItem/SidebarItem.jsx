import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../Svg/SvgIcon'
import c from './SidebarItem.module.scss'

export const SidebarItem = ({item, index, active}) => {
	const check = active === index;
	return (
		<li 
			className={check ? `${c.link} ${c.active}` : c.link}
			>
				<Link to={`/${item}`}>
					<SvgIcon id={item}/>
				{check && 
				<>
					<motion.div
						className={c.link_bg}
						layoutId='link_bg'>
							<SvgIcon id={'layout'}/>
					</motion.div>
					<motion.div
						className={c.top} 
						layoutId='top'>
					</motion.div>
				</>
					}
				</Link>
		</li>
	)
}
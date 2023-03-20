import React from "react";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


const NavItem = ({item, isSelected, handleClick}) => {
	return (
		<li onClick={handleClick} className="nav__item">
			<Link to={`/${item}`}><div>{item}</div></Link>
		{isSelected ? <motion.div className="selected__item" layoutId='underline'></motion.div> : null}
		</li>
		
		
	)
}

export default NavItem
import React from "react";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { SvgIcon } from "../Svg/SvgIcon";



const NavItem = ({item, isSelected, handleClick}) => {

	return (
		<li onClick={handleClick} className={`nav__item ${item}`}>
			<Link to={`/${item}`}><SvgIcon id={item} isSelected={isSelected}/></Link>
		{isSelected ? <motion.div className="selected__item" layoutId='underline'></motion.div> : null}
		</li>
		
		
	)
}

export default NavItem
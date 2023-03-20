import React, { useState } from "react";
import {FaHome, FaTasks} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import {IoMdSettings} from 'react-icons/io'
import './Navigation.css'
import NavItem from "./NavItem";
import logo from '../../assets/logo.svg'




const AsideBar = () => {
	const navData = ['Home', 'Tasks', 'D', 'N','O', 'U', 'S', 'L']
	const [activeIndex, setActive] = useState(0)
	return (
		<div className="asidebar">
			<div className="asidebar-container">
				<div className="asidebar__logo">
					<div className="asidebar__logo-bg"></div>
					<img src={logo} alt="logo" />
				</div>
				<nav className="asidebar__nav nav">
					<ul className="nav__list">
						{navData.map((item, index) => <NavItem key={index} item={item} isSelected={index === activeIndex} handleClick={()=>{setActive(index)}} />)}
					</ul>
				</nav>
			</div>
		</div>
		
	)
}
export default AsideBar
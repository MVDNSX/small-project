import { useState } from "react"
import { SidebarItem } from "./SidebarItem";
import './Sidebar.css'
import logo from '../../assets/logo.svg'

export const Sidebar = () => {
	const menuLinks = ['home','discount','dashboard','notifications','orders','account','settings','logout'];
	const [isActiveIndex, setIsActiveIndex] = useState(0)
	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<div className="sidebar__logo-bg"></div>
				<img className="sidebar__logo-img" src={logo} alt="logo"/>
			</div>
			<nav className="sidebar__nav nav">
				<ul className="nav__list">
					{menuLinks.map((item, index)=> <SidebarItem key={index} item={item} isSelected={index === isActiveIndex} handleClick={() => {setIsActiveIndex(index)}}/>)}
				</ul>
			</nav>
		</div>
	)
}
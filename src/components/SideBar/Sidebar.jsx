import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Sidebar.css'
import { SidebarItem } from "./SidebarItem/SidebarItem"

export const Sidebar = () => {
	const menuLinks = ['home','discount','dashboard','notifications','orders','account','settings','logout'];

	const location = useLocation()
	const [isActiveIndex, setIsActiveIndex] = useState()

	useEffect(()=>{
		for(let i = 0; i < menuLinks.length; i++){
			if( location.pathname.includes(menuLinks[i]) === true ) {
				setIsActiveIndex(i)
			}
		}
	},[location.pathname])

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
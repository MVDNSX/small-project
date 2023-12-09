import c from'./Sidebar.module.scss'
import { useEffect, useState } from "react"
import { useLocation, Link } from 'react-router-dom'
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { SvgIcon } from '../Svg/SvgIcon'

export const Sidebar = () => {
	const role = 'root'
	const links = {
		root: ['home','discount','orders','statistics','management','settings','account'],
		default: ['home','discount','orders','settings','account']
	}
	
	let menuLinks = role ? links[role] : links['default'] 

	const location = useLocation()
	const [isActiveIndex, setActiveIndex] = useState()
	useEffect(()=>{
		for(let i = 0; i < menuLinks.length; i++){
			if( location.pathname.includes(menuLinks[i]) === true ) {
				setActiveIndex(i)
			}
		}
	},[location.pathname])

	return (
		<div className={c.sidebar}>

			<Link to={'/home'}>
				<div className={c.logo_bg}>
					<SvgIcon id={'logo'}/>
				</div>
			</Link>
			
			<nav className={c.nav}>
				<ul className={c.list}>
				{menuLinks.map((item, index)=> 
					<SidebarItem 
						key={index}
						item={item}
						index={index}
						active={isActiveIndex}
						/>)}
				</ul>
			</nav>
		</div>
	)
}
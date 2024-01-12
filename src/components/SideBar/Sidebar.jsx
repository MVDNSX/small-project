import c from'./Sidebar.module.scss'
import { useEffect, useState } from "react"
import { useLocation, Link } from 'react-router-dom'
import { SidebarItem } from "./SidebarItem/SidebarItem"
import { SvgIcon } from '../Svg/SvgIcon'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
	const role = useSelector((state) => state.user.currentUser.role)
	const links = {
		admin: ['home','discount','orders','statistics','management','settings','account'],
		test: ['home','discount','orders','statistics','management','settings','account'],
		user: ['home','discount','orders','settings','account']
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
					<SvgIcon icon={'logo'}/>
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
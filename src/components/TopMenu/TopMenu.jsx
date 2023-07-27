import {motion} from 'framer-motion'
import './TopMenu.css'
export const TopMenu = ({active, onClickMenu}) => {
	const menuCategory = [
		{id:0, name: 'All Dishes'},
		{id: 1, name: 'Hot Dishes'},
		{id: 2, name:'Cold Dishes'},
		{id: 3, name:'Soup'},
		{id: 4, name:'Grill'},
		{id: 5, name:'Dessert'}
	]
	const handleClickMenu = (item) => {
		if(active.id !== item.id){
			onClickMenu(item)
		}
	}
	return (
		<nav className="top__menu menu">
			<ul className="menu__list">
				{menuCategory.map((item, index) => 
					<motion.li 
						key={index}
						initial={{color: '#fff'}} 
						animate={active.id === item.id ? {color: '#EA736D'} : {color: '#FFF'}} 
						onClick={()=>{handleClickMenu(item)}} 
						className='menu__item'>{item.name}
						{active.id === item.id ? <motion.div layoutId='dishes' className='menu__indecator'></motion.div>: null}
					</motion.li>)}
			</ul>
		</nav>
	)
}


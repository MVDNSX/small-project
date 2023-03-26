import './HomePage.css'
import {BiSearch} from 'react-icons/bi'
import {useState} from 'react'
import {motion} from 'framer-motion'

const Home = () => {

	const menu = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Dessert']
	const [activeMenu, setActiveMenu] = useState(0)

	return (
		<div className="home">
			<div className="home-container">
				<div className="home__header">
					<div className="home__info info">
						<div className="info__name title">Riverside Flamez</div>
						<div className="info__date date">Tuesday, 2 Feb 2021</div>
					</div>
					<div className="home__search">
						<BiSearch size='20' color='#fff'/>
						<input type="text" placeholder='Search for food, coffe, etc..' />
					</div>
				</div>
				<div className="home__main">
					<nav className="home__menu menu">
						<ul className="menu__list">
							{menu.map((item, index) => <MenuItem key={index} item={item} isSelected={index === activeMenu} handleClick={()=>{setActiveMenu(index)}}/>)}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Home

const MenuItem = ({item, isSelected, handleClick}) => {
 return (
	<>
	<motion.li initial={{color: '#fff'}} animate={isSelected ? {color: '#EA736D'} : {color: '#FFF'}} onClick={handleClick} className='menu__item'>{item}
		{isSelected ? <motion.div layoutId='dishes' className='menu__indecator'></motion.div>: null}
	</motion.li>
	</>
	
 )
}
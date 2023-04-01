import './HomePage.css'
import {BiSearch} from 'react-icons/bi'
import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {SlArrowDown, SlArrowUp} from 'react-icons/sl'
import {CategoryDishes} from '../../components/CategoryDishes/CategoryDishes'

const Home = () => {

	const menuCategory = [{Id: 1, name: 'Hot Dishes'},{Id: 2, name:'Cold Dishes'}, {Id: 3, name:'Soup'}, {Id: 4, name:'Grill'}, {Id: 5, name:'Dessert'}]
	const [dishes, setDishes] = useState([])
	const [isLoading, setIsLoading] = useState(true)
		useEffect(()=> {
			fetch('https://6420700f25cb657210497359.mockapi.io/api/dishes')
			.then((res) => res.json())
			.then((json) => {
				setDishes(json)
				setIsLoading(false)
			})
		}, [])

	const [search, setSearch] = useState('')
	const [activeMenu, setActiveMenu] = useState(0)
	const filterVariants = ['Cheapers', 'Expensive', 'Name']
	const [currFilter, setCurrFilter] = useState(0)
	const [isDrop, setIsDrop] = useState(false)
	const handleClickVariant = (index) => {
		if(index !== currFilter){
			setCurrFilter(index);
		}
		setIsDrop(!isDrop)
	}


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
						<input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search for food, coffe, etc..' value={search} />
					</div>
				</div>
				<div className="home__main">
					<nav className="home__menu menu">
						<ul className="menu__list">
							{menuCategory.map((item, index) => <MenuItem key={index} item={item.name} isSelected={index === activeMenu} handleClick={()=>{setActiveMenu(index)}}/>)}
						</ul>
					</nav>
					<div className="dishes__filter filter">
						<div className="filter__current" onClick={()=>{setIsDrop(!isDrop)}}>{filterVariants[currFilter]}</div>
							<AnimatePresence>
							{isDrop ? <motion.div initial={{y: '-30px', opacity: 0}} animate={{y: 0, opacity:1}} exit={{y: '20px', opacity: 0}} className="filter__variants">{filterVariants.map((item, index) => <div key={index} onClick={() => {handleClickVariant(index)}} className="filter__variant">{item}</div>)}</motion.div> : null}
							</AnimatePresence>
						</div>
				</div>

				<div className="home__menu">
					{menuCategory.map((category, index)=> <CategoryDishes key={index} name={category.name} dishes={dishes.filter( el => el.categoryId === category.Id)}/> )}
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
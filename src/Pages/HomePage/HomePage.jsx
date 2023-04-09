import './HomePage.css'
import {BiSearch} from 'react-icons/bi'
import {useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {CategoryDishes} from '../../components/CategoryDishes/CategoryDishes'
import {SvgIcon} from '../../components/Svg/SvgIcon'
import { TopMenu } from '../../components/TopMenu/TopMenu'
import { FilterDrop } from '../../components/FilterDrop/FilterDrop'
import { Basket } from '../../components/Basket/Basket'

const Home = () => {

	const [activeCategory, setActiveCategory] = useState({id:0, name: 'All Dishes'})
	const [sortType, setSortType] = useState({type: 'price', name: 'Cheapers'})
	const [isDropSort, setIsDropSort] = useState(false)
	const [dishes, setDishes] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(()=> {
			const filtering = activeCategory.id > 0 ? `categoryId=${activeCategory.id}` : '';
			const order = sortType.type.includes('-') ? '&order=desc' : '&order=asc'
			const sorting = `&sortBy=${sortType.type.replace('-','')}`

			setIsLoading(true)
			fetch(`https://6420700f25cb657210497359.mockapi.io/api/dishes?${filtering}${sorting}${order}`)
			.then((res) => res.json())
			.then((json) => {
				setDishes(json)
				setIsLoading(false)
			})
		}, [activeCategory, sortType])

	const [search, setSearch] = useState('')
	const [isOpenOrder, setIsOpenOrder] = useState(false)

	return (
		<div className="homepage">
			<div className="main-content">
				<div className="main-content__container">
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
				<div className="home__top">
					<TopMenu active={activeCategory} onClickMenu={(obj)=>setActiveCategory(obj)}/>
					<FilterDrop current={sortType} setCurrent={(id)=> {setSortType(id)}} drop={isDropSort} setDrop={(drop)=>setIsDropSort(drop)}/>
				</div>
				<div className="home__menu">
					{<CategoryDishes name={activeCategory.name} dishes={dishes} isLoading={isLoading}/>}
				</div>
				</div>
			</div>
			<div className="order">
				<div className="order-container">
					<div className="order__btn" onClick={()=>{setIsOpenOrder(true)}}>
						<SvgIcon id={'basket'}/>
						{/* <span>{1}</span> */}
					</div>
				</div>
			</div>
			<div className="basket">
					<AnimatePresence>
						{isOpenOrder ? <motion.div initial={{x: '100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{ type: "Tween", duration: 0.25}} className="basket-container">
							<Basket isOpen={() => {setIsOpenOrder(false)}}/>
						</motion.div> : null}
					</AnimatePresence>
			</div>
		</div>
		
	)
}

export default Home
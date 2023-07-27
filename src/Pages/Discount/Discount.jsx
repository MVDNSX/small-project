//import { Basket } from "../../components/Basket/Basket"
//import { useState} from 'react'
//import {CategoryDishes} from '../../components/CategoryDishes/CategoryDishes'
//import {SvgIcon} from '../../components/Svg/SvgIcon'
//import { TopMenu } from '../../components/TopMenu/TopMenu'
//import { Filter } from '../../components/FilterDrop/FilterDrop'
//import {motion, AnimatePresence} from 'framer-motion'
//import { useDishes } from '../../hooks/useDishes'
//import { useDiscount } from '../../hooks/useDiscount'
//import Search from '../../components/Search/Search'

const Discount = () => {

//	const [activeCategory, setActiveCategory] = useState({id:0, name: 'All Dishes'})
//	const [sortType, setSortType] = useState({type: 'price', name: 'Cheapers'})
//	const [isDropSort, setIsDropSort] = useState(false)
	

//	const {isLoading, dishes} = useDishes();
//	const discount = useDiscount(dishes)
//	//useEffect(()=> {
//	//		const filtering = activeCategory.id > 0 ? `categoryId=${activeCategory.id}` : '';
//	//		const order = sortType.type.includes('-') ? '&order=desc' : '&order=asc'
//	//		const sorting = `&sortBy=${sortType.type.replace('-','')}`

			
//	//		//setIsLoading(true)
//	//		//fetch(`https://6420700f25cb657210497359.mockapi.io/api/dishes?${filtering}${sorting}${order}`)
//	//		//.then((res) => res.json())
//	//		//.then((json) => {
//	//		//	setDishes(json)
//	//		//	setIsLoading(false)
//	//		//})
//	//	}, [activeCategory, sortType])

	
//	const [isOpenOrder, setIsOpenOrder] = useState(false)

	return (<></>
//		<div className="homepage">
//			<div className="main-content">
//				<div className="main-content__container">
//				<div className="home__header">
//					<div className="home__info info">
//						<div className="info__name title">Riverside Flamez - Discount sales %</div>
//						<div className="info__date date">Tuesday, 2 Feb 2021</div>
//					</div>
//					<Search/>
//				</div>
//				<div className="home__top">
//					<TopMenu active={activeCategory} onClickMenu={(obj)=>setActiveCategory(obj)}/>
//					<Filter />
//				</div>
//				<div className="home__menu">
//					{<CategoryDishes name={activeCategory.name} dishes={discount}  isLoading={isLoading}/>}
//				</div>
//				</div>
//			</div>
//			<div className="order">
//				<div className="order-container">
//					<div className="order__btn" onClick={()=>{setIsOpenOrder(true)}}>
//						<SvgIcon id={'basket'}/>
//						{/* <span>{1}</span> */}
//					</div>
//				</div>
//			</div>
//			<div className="basket">
//					<AnimatePresence>
//						{isOpenOrder ? <motion.div initial={{x: '100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{ type: "Tween", duration: 0.25}} className="basket-container">
//							<Basket isOpen={() => {setIsOpenOrder(false)}}/>
//						</motion.div> : null}
//					</AnimatePresence>
//			</div>
//		</div>
		
	)
}

export default Discount
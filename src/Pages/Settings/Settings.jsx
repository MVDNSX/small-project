import c from './Settings.module.css'
import DishItem from '../../components/UI/DishItem/DishItem'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import {useEffect, useState } from 'react'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { BiSearch } from 'react-icons/bi'
import { useSortAndFilterDishes } from '../../hooks/useDishes'
import ServiceDishes from '../../API/ServiceDishes'
import Dishes from '../../components/Dishes/Dishes'

const Settings = () => {

	useEffect(()=>{
		fetchDishes()
	},[])
	
	const [dishes, setDishes] = useState([])
	const [dishFilter, setDishFilter] = useState({sortName: '', sort: '', query:''})
	const sortedAndSearchDishes = useSortAndFilterDishes(dishes, dishFilter.sort, dishFilter.query)
	const [isDishesLoading, setDishesLoading] = useState(false);

	async function fetchDishes() {
		setDishesLoading(true)
		const dishes = await ServiceDishes.getAll();
		setDishes(dishes)
		setDishesLoading(false)
	}

	return (
		<div className={c.home}>

		<CustomSelect 
			value={dishFilter.sortName}
			defaultValue={'Sort By'}
			onChange={sort => setDishFilter({...dishFilter, sort: sort.value, sortName: sort.name})}
			options={[
				{value: 'name', name: 'Name' },
				{value: 'price', name: 'Price'},
								]}/>

		<CustomInput 
			type="text" 
			placeholder='Search for food, coffe, etc..' 
			value={dishFilter.query}
			onChange={(e) => setDishFilter({...dishFilter, query: e.target.value})}>
				<BiSearch size='20' color='#fff'/>
		</CustomInput>

		<Dishes
			isDishesLoading={isDishesLoading}
			sortedAndSearchDishes={sortedAndSearchDishes}/>

		</div>
	)
}

export default Settings
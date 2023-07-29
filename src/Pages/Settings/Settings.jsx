import c from './Settings.module.css'
import CategoryDishes from '../../components/CategoryDishes/CategoryDishes'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import {useEffect, useState } from 'react'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { BiSearch } from 'react-icons/bi'
import { useSortAndFilterDishes } from '../../hooks/useDishes'
import ServiceDishes from '../../API/ServiceDishes'
import Dishes from '../../components/Dishes/Dishes'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import { getDateFormat } from '../../utils/getDate'
import { getCategories } from '../../utils/getCategories'
import { getOptionsSort } from '../../utils/getOptionSort'

const Settings = () => {

	useEffect(()=>{
		fetchDishes()
	},[])
	
	const [dishes, setDishes] = useState([])
	const [dishFilter, setDishFilter] = useState({sortName: '', sort: '', query:'', category: 0})
	const sortedAndSearchDishes = useSortAndFilterDishes(dishes, dishFilter.sort, dishFilter.query, dishFilter.category)
	const [isDishesLoading, setDishesLoading] = useState(false);
	const date = getDateFormat();
	const categories = getCategories();
	const options = getOptionsSort

	async function fetchDishes() {
		setDishesLoading(true)
		const dishes = await ServiceDishes.getAll();
		setDishes(dishes)
		setDishesLoading(false)
	}
	return (
		<div className={c.home}>

		<PageHeader header={'Settings'} date={date}/>

		<CustomSelect 
			value={dishFilter.sortName}
			defaultValue={'Sort By'}
			onChange={sort => setDishFilter({...dishFilter, sort: sort.value, sortName: sort.name})}
			options={options}/>

		<CustomInput 
			placeholder='Search for food, coffe, etc..' 
			value={dishFilter.query}
			onChange={(e) => setDishFilter({...dishFilter, query: e.target.value})}>
				<BiSearch size='20' color='#fff'/>
		</CustomInput>

		<CategoryDishes 
			categories={categories}
			onChange={(category) => setDishFilter({...dishFilter, category: category})}
		/>

		<Dishes
			isDishesLoading={isDishesLoading}
			sortedAndSearchDishes={sortedAndSearchDishes}/>
		</div>
	)
}

export default Settings
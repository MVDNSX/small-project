import c from './Settings.module.css'
import DishItem from '../../components/UI/DishItem/DishItem'
import { useDishes } from '../../hooks/useDishes'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import { useMemo, useState } from 'react'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { BiSearch } from 'react-icons/bi'

const Settings = () => {
	const url = `https://6420700f25cb657210497359.mockapi.io/api/dishes`;

	const {dishes, setDishes} = useDishes(url);
	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')


	const sortedDishes = useMemo( () => {
		if(selectedSort.value === 'name' ) {
			return [...dishes].sort( (a,b) => {return a[selectedSort.value].localeCompare(b[selectedSort.value])})
		}else if(selectedSort.value === 'price'){
			return [...dishes].sort( (a,b) => {return a[selectedSort.value] - b[selectedSort.value] })
		}
		else{
			return dishes;
		}
	}, [selectedSort, dishes])

	const sortedAndSearchDishes = useMemo( ()=> {
		return sortedDishes.filter( d => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
	},[searchQuery, sortedDishes])

	return (
		<div className={c.home}>

		<CustomSelect 
			value={selectedSort.name}
			defaultValue={'Sort By'}
			onChange={sort => setSelectedSort(sort)}
			options={[
				{value: 'name', name: 'Name' },
				{value: 'price', name: 'Price'},
								]}/>

		<CustomInput 
		type="text" 
		placeholder='Search for food, coffe, etc..' 
		value={searchQuery}
		onChange={(e) => setSearchQuery(e.target.value)}><BiSearch size='20' color='#fff'/></CustomInput>

		<div className={c.dishes}>
			{dishes && sortedAndSearchDishes.map( dish => 
				<DishItem 
				key={dish.dishesId}
				dish={dish}
				/>)}
		</div>	

		</div>
	)
}

export default Settings
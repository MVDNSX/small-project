import c from './Settings.module.css'
import DishItem from '../../components/UI/DishItem/DishItem'
import { useDishes } from '../../hooks/useDishes'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import { useState } from 'react'

const Settings = () => {
	const url = `https://6420700f25cb657210497359.mockapi.io/api/dishes`;
	const {dishes} = useDishes(url);

	const [selectedSort,setSelectedSort] = useState('')
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

		<div className={c.dishes}>
			{dishes && dishes.map( dish => <DishItem key={dish.dishesId}/>)}
		</div>	

		</div>
	)
}

export default Settings
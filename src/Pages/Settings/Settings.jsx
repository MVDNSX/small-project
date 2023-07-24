import { useEffect, useState } from 'react'
import classes from './Settings.module.css'
import DishItem from '../../components/UI/DishItem/DishItem'

const Settings = () => {

	const [dishes, setDishes] = useState('')

	useEffect(()=>{
		fetch(`https://6420700f25cb657210497359.mockapi.io/api/dishes`)
		.then((res) => res.json())
		.then((res) => {
			setDishes(res)
		})
	}, [])


	return (
		<div className={classes.home}>
			
		{dishes && dishes.map( dish => <DishItem key={dish.dishesId}/>)}

		</div>
	)
}

export default Settings
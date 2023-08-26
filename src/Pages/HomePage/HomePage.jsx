import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import ServiceDishes from '../../API/ServiceDishes'
import CategoryDishes from '../../components/CategoryDishes/CategoryDishes'
import Dishes from '../../components/Dishes/Dishes'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import { useSortAndFilterDishes } from '../../hooks/useDishes'
import { getCategories } from '../../utils/getCategories'
import { getOptionsSort } from '../../utils/getOptionSort'
import c from './HomePage.module.css'
import Basket from '../../components/Basket/Basket'

import {useGetDishesQuery, useAddDishesMutation} from '../../store/dishesAPI'

const Home = () => {

	const {data=[], error, isLoading } = useGetDishesQuery()

	const [dishFilter, setDishFilter] = useState({sortName: '', sort: '', query:'', category: 0})
	const sortedAndSearchDishes = useSortAndFilterDishes(data, dishFilter.sort, dishFilter.query, dishFilter.category)
	const categories = getCategories();
	const options = getOptionsSort();

	return (
		<div className={c.home}>
				<div className={c.main}>

					<div className={c.header__wrapper}>
						<PageHeader header={'Riverside Flamez'}/>
						<CustomInput 
						placeholder='Search for food, coffe, etc..'
						style={{width: 164}} 
						value={dishFilter.query}
						onChange={(e) => setDishFilter({...dishFilter, query: e.target.value})}>
							<BiSearch size='20' color='#fff'/>
						</CustomInput>
					</div>

					<div className={c.category__wrapper}>
						<CategoryDishes 
							categories={categories}
							onChange={(category) => setDishFilter({...dishFilter, category: category})}
						/>
					</div>
				
					<div className={c.sort__wrapper}>
						<div className={c.title}>Choose Dishes</div>
						<CustomSelect 
							value={dishFilter.sortName}
							defaultValue={'Sort By'}
							onChange={sort => setDishFilter({...dishFilter, sort: sort.value, sortName: sort.name})}
							options={options}/>
					</div>

					<div className={c.dishes__wrapper}>
							<Dishes 
								key={c.id} 
								isDishesLoading={isLoading} 
								sortedAndSearchDishes={sortedAndSearchDishes}/>
					</div>

				</div>

				<div className={c.basket__wrapper}>
					{/*<Basket/>*/}
				</div>

				


		</div>
	)
}

export default Home
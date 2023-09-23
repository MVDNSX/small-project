import {useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import {Category} from '../../components/Category/Category'
import Dishes from '../../components/Dishes/Dishes'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import CustomSelect from '../../components/UI/CustomSelect/CustomSelect'
import PageHeader from '../../components/UI/PageHeader/PageHeader'
import { useSortAndFilterDishes } from '../../hooks/useDishes'
import { getCategories } from '../../utils/getCategories'
import { getOptionsSort } from '../../utils/getOptionSort'
import c from './HomePage.module.css'
import Basket from '../../components/Basket/Basket'

import {useGetDishesQuery} from '../../store/dishesAPI'

const Home = () => {

	const {data: dishes=[],  isLoading} = useGetDishesQuery()

	const [dishFilter, setDishFilter] = useState({sortName: '', sort: '', query:'', category: 0})
	const sortedAndSearchDishes = useSortAndFilterDishes(dishes, dishFilter.sort, dishFilter.query, dishFilter.category)
	const categories = getCategories();
	const options = getOptionsSort();

	return (
		<div className={c.home}>

				<div className={c.main}>
					
					<PageHeader header={'Riverside Flamez'}>
							<CustomInput 
							placeholder='Search for food, coffe, etc..'
							style={{width: 164}} 
							value={dishFilter.query}
							onChange={(e) => setDishFilter({...dishFilter, query: e.target.value})}>
								<BiSearch size='20' color='#fff'/>
							</CustomInput>
					</PageHeader>

					<Category 
							layout='homeId'
							categories={categories}
							onChange={(category) => setDishFilter({...dishFilter, category: category})}
						/>

					<div className={c.sort__wrapper}>
						<div className={c.title}>Choose Dishes</div>
						<CustomSelect 
							value={dishFilter.sortName}
							defaultValue={'Sort By'}
							onChange={sort => setDishFilter({...dishFilter, sort: sort.value, sortName: sort.name})}
							options={options}/>
					</div>

					<Dishes 
						key={c.id} 
						isDishesLoading={isLoading} 
						sortedAndSearchDishes={sortedAndSearchDishes}/>

				</div>

				<Basket/>
				

		</div>
	)
}

export default Home
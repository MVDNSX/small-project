import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Basket } from '../../components/Basket/Basket'
import { Category } from '../../components/Category/Category'
import { Dishes } from '../../components/Dishes/Dishes'
import { Layout } from '../../components/Layout/Layout'
import { CustomInput } from '../../components/UI/CustomInput/CustomInput'
import { CustomSelect } from '../../components/UI/CustomSelect/CustomSelect'
import { PageHeader } from '../../components/UI/PageHeader/PageHeader'
import { useSortAndFilterDishes } from '../../hooks/useDishes'
import { useGetProductQuery } from '../../store/productAPI'
import { getCategories } from '../../utils/getCategories'
import { getOptionsSort } from '../../utils/getOptionSort'
import c from './DishesPage.module.scss'

export const DishesPage = ({isDiscount}) => {
	const categories = getCategories();
	const options = getOptionsSort();
  const {data: dishes=[],  isLoading} = useGetProductQuery()
  const [dishFilter, setDishFilter] = useState({sortName: '', sort: '', query:'', category: 0})
	const sortedAndSearchDishes = useSortAndFilterDishes(dishes, isDiscount, dishFilter.category, dishFilter.query, dishFilter.sort)
  return (
    <div className={c.dishes__container}>
      <Layout>
        <PageHeader header={isDiscount ? `Riverside Flames - Discount sales %` : `Riverside Flames`}>
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

            <div className={c.sort__container}>
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
      </Layout>
      <Basket/>
    </div>
  )
}
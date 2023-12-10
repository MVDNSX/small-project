import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Category } from '../../components/Category/Category'
import { Layout } from '../../components/Layout/Layout'
import {PageHeader} from '../../components/UI/PageHeader/PageHeader'
import SkeletonDishItem from '../../components/UI/SkeletonDishItem/SkeletonDishItem'
import { EditDish } from '../../components/components-settings/ProductManagement/EditDish/EditDish'
import { ModalProduct } from '../../components/components-settings/ProductManagement/Modal/ModalProduct'
import { NewDish } from '../../components/components-settings/ProductManagement/NewDish/NewDish'
import { useGetProductQuery } from '../../store/productAPI'
import { getCategories } from '../../utils/getCategories'
import c from './Management.module.scss'
import { useCategoryDishes, useSortAndFilterDishes } from '../../hooks/useDishes'
import { CustomInput } from '../../components/UI/CustomInput/CustomInput'
import { BiSearch } from 'react-icons/bi'

export const Management = () => {
  const categories = getCategories();
  const [dishFilter, setDishFilter] = useState({category: 0, query: ''})
  const [modalOpen, setModalOpen] = useState(false)
  const {data: allDish, isLoading} = useGetProductQuery()
  const dishes = useSortAndFilterDishes(allDish, dishFilter.category, dishFilter.query)
  return (
    <Layout>
    <AnimatePresence mode='wait'>
      {modalOpen && <ModalProduct isOpenModal={setModalOpen}/>}
    </AnimatePresence>

    <PageHeader header={'Product Management'}>
      <CustomInput 
				register={null}
				placeholder='Search for food, coffe, etc..'
				style={{width: 164}} 
				value={dishFilter.query}
				onChange={(e) => setDishFilter({...dishFilter, query: e.target.value})}
        icon='search'>
			</CustomInput>
    </PageHeader>
    <Category 
      layout='settingId'
		  categories={categories}
		  onChange={(category) => setDishFilter({...dishFilter, category: category})}
		/>
    <div className={c.edits}>
      <NewDish handleOpen={setModalOpen}/>
      {!isLoading ? dishes.map( dish =>  <EditDish key={dish.productId} dish={dish}/>) : [...new Array(8)].map ((_, index) => <SkeletonDishItem key={index}/>)}
    </div>
    </Layout>
  )
}
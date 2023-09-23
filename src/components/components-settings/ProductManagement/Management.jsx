import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useGetDishesQuery } from '../../../store/dishesAPI'
import { getCategories } from '../../../utils/getCategories'
import Category from '../../Category/Category'
import { EditDish } from '../../UI/EditDish/EditDish'
import { NewDish } from '../../UI/NewDish/NewDish'
import c from './Management.module.scss'
import { ModalDish } from '../../UI/ModalDish/ModalDish'

export const Management = () => {
  const categories = getCategories();
  const [Filter, setFilter] = useState({category: 0})
  const [modal, setModal] = useState(false)
  const {data: dishes, isLoading} = useGetDishesQuery()
  return (
    <>
    <AnimatePresence mode='wait'>
      {modal && <ModalDish setModal={setModal}/>}
    </AnimatePresence>

    <div className={c.header}>
      <div>Product Management</div>
      {/*<div>manage categories</div>*/}
    </div>
    <Category 
      layout='settingId'
		  categories={categories}
		  onChange={(category) => setFilter({category: category})}
		/>
    <div className={c.edits}>
      <NewDish openModal={setModal}/>
      {!isLoading && dishes.map( dish =>  <EditDish key={dish.productId} dish={dish}/>)}
    </div>
    </>
  )
}
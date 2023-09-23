import c from './Management.module.scss'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useGetDishesQuery } from '../../../store/dishesAPI'
import { getCategories } from '../../../utils/getCategories'
import { Category } from '../../Category/Category'
import { EditDish } from './EditDish/EditDish'
import { NewDish } from './NewDish/NewDish'
import { ModalDish } from './Modal/ModalProduct'

export const Management = () => {
  const categories = getCategories();
  const [Filter, setFilter] = useState({category: 0})
  const [modalOpen, setModalOpen] = useState(false)
  const {data: dishes, isLoading} = useGetDishesQuery()

  return (
    <>
    <AnimatePresence mode='wait'>
      {modalOpen && <ModalDish handleClose={setModalOpen}/>}
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
      <NewDish handleOpen={setModalOpen}/>
      {!isLoading && dishes.map( dish =>  <EditDish key={dish.productId} dish={dish}/>)}
    </div>
    </>
  )
}
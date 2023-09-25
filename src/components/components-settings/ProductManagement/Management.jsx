import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useGetProductQuery } from '../../../store/productAPI'
import { getCategories } from '../../../utils/getCategories'
import { Category } from '../../Category/Category'
import { EditDish } from './EditDish/EditDish'
import c from './Management.module.scss'
import { ModalProduct } from './Modal/ModalProduct'
import { NewDish } from './NewDish/NewDish'
import SkeletonDishItem from '../../UI/SkeletonDishItem/SkeletonDishItem'

export const Management = () => {
  const categories = getCategories();
  const [Filter, setFilter] = useState({category: 0})
  const [modalOpen, setModalOpen] = useState(false)
  const {data: dishes, isLoading} = useGetProductQuery()

  return (
    <>
    <AnimatePresence mode='wait'>
      {modalOpen && <ModalProduct isOpenModal={setModalOpen}/>}
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
      {!isLoading ? dishes.map( dish =>  <EditDish key={dish.productId} dish={dish}/>) : [...new Array(8)].map ((_, index) => <SkeletonDishItem key={index}/>)}
    </div>
    </>
  )
}
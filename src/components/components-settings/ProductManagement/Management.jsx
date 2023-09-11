import { useState } from 'react'
import c from './Management.module.scss'
import { getCategories } from '../../../utils/getCategories'
import Category from '../../Category/Category'
import CustomButton from '../../UI/CustomButton/CustomButton'
import { NewDish } from '../../UI/NewDish/NewDish'
import { EditDish } from '../../UI/EditDish/EditDish'

export const Management = () => {
  const categories = getCategories();
  const [Filter, setFilter] = useState({category: 0})
  return (
    <>
    <div className={c.header}>
      <div>Product Management</div>
      {/*<div>manage categories</div>*/}
    </div>
    <Category 
		  categories={categories}
		  onChange={(category) => setFilter({category: category})}
		/>
    <div className={c.edits}>
      <NewDish/>
      <EditDish/>
      <EditDish/>
      <EditDish/>
      <EditDish/>
    </div>
    <div className={c.controls}>
      <CustomButton text='Discard Changes'/>
      <CustomButton text='Save Changes'/>
    </div>
    </>
  )
}
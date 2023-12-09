import SkeletonDishItem from '../UI/SkeletonDishItem/SkeletonDishItem'
import {memo, useState} from 'react'
import DishItem from '../UI/DishItem/DishItem'
import c from './Dishes.module.css'


export const Dishes = memo(({isDishesLoading, sortedAndSearchDishes}) => { 
  const [selectedId, setSelectedId] = useState(null)
  return (
      <div className={c.dishes}>
        {!isDishesLoading 
          ? sortedAndSearchDishes.map( d => 
          <DishItem 
          key={d.productId}
          dish={d}
          layoutId={d.productId}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          />)
          : [...new Array(8)].map ((_, index) => <SkeletonDishItem key={index}/>)
        } 
      </div>	
  )
})
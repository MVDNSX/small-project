import SkeletonDishItem from '../UI/SkeletonDishItem/SkeletonDishItem'
import DishItem from '../UI/DishItem/DishItem'
import c from './Dishes.module.css'

const Dishes = ({isDishesLoading, sortedAndSearchDishes}) => {
  return (
    <div className={c.dishes}>
			{!isDishesLoading 
        ? sortedAndSearchDishes.map( dish => 
				<DishItem 
				key={dish.dishesId}
				dish={dish}
				/>)
        : [...new Array(8)].map ((_, index) => <SkeletonDishItem key={index}/>)
      } 
		</div>	
  )
}
export default Dishes
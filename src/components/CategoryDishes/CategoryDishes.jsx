
import './CategoryDiahes.css'
import { DishesCard } from "../DishesCard/DishesCard";
import SkeletonCard from '../DishesCard/SkeletonCard';


export const CategoryDishes = ({name, dishes, isLoading}) => {
	return (
		<div className="category-block">
			<div className="category__name">{name}</div>
			{ isLoading
			? <div className="category__dishes">
					{[...new Array(8)].map((_, index) => <SkeletonCard key={index}/>)}
				</div> 
			: 
			  <div className="category__dishes">
					{dishes.map((el, index) =>
						<DishesCard 
							key={index} 
							dishesInfo={el}
							id={index}
					/>)}
				</div>}
		</div>
	)
}
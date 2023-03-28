
import './CategoryDiahes.css'
import { DishesCard } from "../DishesCard/DishesCard";


export const CategoryDishes = ({name, dishes}) => {
	return (
		<div className="category-block">
			<div className="category__name">{name}</div>
			<div className="category__dishes">
				{dishes.map((el, index) => 
					<DishesCard 
					key={index} 
					name={el.name} price={el.price} bowls={el.bowls} discount={el.discount} />)}
			</div>
		</div>
	)
}
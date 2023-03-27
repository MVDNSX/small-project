
import './CategoryDiahes.css'
import { DishesCard } from "../DishesCard/DishesCard";


export const CategoryDishes = ({name}) => {
	const menu = [
		{categoryId: 1, name: 'Spicy seasoned seafood noodles', price: 2.29, bowls:21, discount: 20},
		{categoryId: 1, name: 'Spicy seasoned seafood noodles', price: 2.29, bowls:21, discount: 20},
		{categoryId: 1, name: 'Spicy seasoned seafood noodles', price: 2.29, bowls:21, discount: 20},
		{categoryId: 1, name: 'Spicy seasoned seafood noodles', price: 2.29, bowls:21, discount: 20},
		{categoryId: 1, name: 'Spicy seasoned seafood noodles', price: 2.29, bowls:21, discount: 20},
]
	return (
		<div className="category-block">
			<div className="category__name">{name}</div>
			<div className="category__dishes">
				{menu.map((el, index) => <DishesCard key={index} name={el.name} price={el.price} bowls={el.bowls} discount={el.discount} />)}
			</div>
		</div>
	)
}

import './CategoryDiahes.css'
import { DishesCard } from "../DishesCard/DishesCard";
import { useState } from 'react';
import SkeletonCard from '../DishesCard/SkeletonCard';


export const CategoryDishes = ({name, dishes}) => {
	return (
		<div className="category-block">
			<div className="category__name">{name}</div>
			{dishes.length !== 0 
			? <div className="category__dishes">
				{ dishes.map((el, index) => 
					<DishesCard 
					key={index} 
					name={el.name} price={el.price} bowls={el.bowls} discount={el.discount} />)}
			</div> 
			: <div className="category__dishes">
				{ [...new Array(8)].map((_, index) => 
					<SkeletonCard key={index}/>)}
			</div>}
		</div>
	)
}